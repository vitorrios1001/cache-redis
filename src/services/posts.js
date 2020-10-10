const PostRepository = require('../repository/postRepository')

const { transformPaginate } = require('../utils/paginate')

const getPostsPaginated = async (page) => {
  const allPosts = await PostRepository.list();

  return transformPaginate(page, allPosts)
};

module.exports = {
  getPostsPaginated,
}