// https://www.npmjs.com/package/wpapi
import WPAPI from 'wpapi'

let wp = new WPAPI({
  endpoint: process.env.WP_API_URL
});

export default function(ctx, inject) {

  let api = {
    async getPosts() {
      try {
        return await wp.posts().perPage(3)
      }catch(e){
        console.log(e)
      }
    }
  }

  inject('api', api)
}
