const { getPosts } = require('../api')

const redis = require('async-redis')
const client = redis.createClient(6379, '0.0.0.0')

client.on('connect', function() {
  console.log('redis:connected')
})

const KEY_POSTS_CACHED = 'KEY_POSTS_CACHED'

class PostRepository {
  static async list() {
    const postsCached = await client.get(KEY_POSTS_CACHED)

    if (postsCached) {
      return JSON.parse(postsCached)
    } else {
      const posts = await getPosts()
      
      client.set(KEY_POSTS_CACHED, JSON.stringify(posts))
      client.expire(KEY_POSTS_CACHED, 60)
      return posts
    }
  }
}

module.exports = PostRepository