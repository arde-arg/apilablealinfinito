// https://www.npmjs.com/package/wpapi
import WPAPI from 'wpapi'
import moment from 'moment'

let wp = new WPAPI({
  endpoint: process.env.WP_API_URL
});

// Adds custom post type
// https://github.com/WP-API/node-wpapi#custom-routes
wp.articulos = wp.registerRoute('wp/v2', '/articulos/(?P<id>)', {
    params: [ 'tags', 'categories', 'status' ]
});

// Configuration
const DEFAULT_IMG = require('@/assets/china.png')

let makeArticles = function(items){
  return items.map(item => makeArticle(item))
}

let makeArticle = function(item){
  // Category
  let category = item._embedded && item._embedded['wp:term']
    ? item._embedded['wp:term'][0].find(
        term => term.taxonomy === 'category' && term.name !== 'Sin categoría'
      )
    : undefined

  // Image
  let image = item._embedded && item._embedded['wp:featuredmedia']
    ? item._embedded['wp:featuredmedia'].find(media => media.media_type === 'image')
    : undefined

  // Auhor
  let author = item._embedded && item._embedded.author && item._embedded.author[0]
    ? item._embedded.author[0]
    : undefined

  // PDfs
  let pdfs = []
  if(item.acf){
    for (var i = 1; i <= 6; i++) {
      if(item.acf['archivo_'+i]){
        pdfs.push(item.acf['archivo_'+i])
      }
    }
  }

  return {
    id: item.id,
    date: item.date ? moment(item.date).format('DD/MM/YYYY') : '',
    content: item.content ? decodeHtmlEntities(item.content.rendered) : '',
    video: item.acf && item.acf.video_vimeo ? item.acf.video_vimeo : '',
    pdfs: pdfs.map(pdf => ({
      id: pdf.id,
      src: pdf.url,
      filename: pdf.name
    })),
    img: {
      src: (image && image.media_details)
        ? (image.media_details.sizes.medium_large
          ? image.media_details.sizes.medium_large.source_url
          : image.media_details.source_url
        ) : '',
      alt: image ? image.alt_text : '',
      src_default: DEFAULT_IMG
    },
    artist: author ? author.name : '',
    title: item.title ? decodeHtmlEntities(item.title.rendered) : '',
    category: category ? category.name : ''
  }
}

// https://stackoverflow.com/a/27020300/6534992
let decodeHtmlEntities = text =>  (text+"").replace(
  /&#\d+;/gm,
  (s) => String.fromCharCode(s.match(/\d+/gm)[0])
)


  let api = {
    async getFeaturedArticles() {
      try {
        let items = await wp.articulos()
          .perPage(3)
          .order('asc')
          .param({status: 'publish'})
          .orderby('date')
          .embed()
        return makeArticles(items)

      }catch(e){
        console.log(e)
      }
    },

    async getArticles(word) {
      try {
        let [tags, categories] = await Promise.all([
          wp.tags().search(word),
          wp.categories().search(word)
        ])

        let promises = [
          wp.articulos().status('publish').search(word).embed()
        ]
        if(tags.length){
          promises.push(
            wp.articulos().status('publish').tags(tags.map(t => t.id)).embed(),
          )
        }
        if(categories.length){
          promises.push(
            wp.articulos().status('publish').categories(categories.map(c => c.id)).embed()
          )
        }

        let results = await Promise.all(promises)

        let items = []
        results.map(result => items.push(...result))

        let uniqueItems = []
        items.map(newItem => {
          let exists = uniqueItems.find(item => newItem.id === item.id)
          if(!exists){
            uniqueItems.push(newItem)
          }
        })
        return makeArticles(uniqueItems)
      }catch(e){
        console.log(e)
      }
    },

    async getArticle(id) {
      try {
        let item = await wp.articulos()
          .id(id)
          .embed()
      }
      return makeArticle(item)
    },

    async getAllArticles() {
      try {
        let items = await wp.articulos().status('publish').embed()
        return makeArticles(items)
      }catch(e){
        console.log(e)
      }
    }
  }

  inject('api', api)
}
