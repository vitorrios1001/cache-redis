const { Router } = require('express')

const { getPostsPaginated } = require('../services/posts')

const routes = Router()

routes.get('/', (req, res) => {
  res.status(200).json({ status: 'Online api of test' })
})

routes.get('/posts', async (req, res) => {
  const page = req.query.page || 1

  const posts = await getPostsPaginated(parseInt(page))

  return res.status(200).send(posts)
})

module.exports = routes