// https://www.npmjs.com/package/wpapi
import WPAPI from 'wpapi'

let wp = new WPAPI({
  endpoint: process.env.WP_API_URL
});

// Adds custom post type
wp.articulos = wp.registerRoute('wp/v2', '/articulos/(?P<id>)');

let makeArticles = function(items){
  return items.map(item => {
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

    return {
      id: item.id,
      img: {
        src: image ? image.media_details.sizes.medium_large.source_url : '',
        alt: image ? image.alt_text : ''
      },
      artist: author ? author.name : '',
      title: item.title.rendered,
      category: category ? category.name : ''
    }
  })
}

export default function(ctx, inject) {

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
    }
  }

  inject('api', api)
}
