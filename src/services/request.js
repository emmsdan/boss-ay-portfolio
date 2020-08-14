const blogBaseUrl = process.env.VUE_APP_BLOG_URL + '/api/v1/blog/'
const pagination = '?pageSize=20&page=0'
export const fetchPortfolio = (totalNumberOfPortfolio = 5) => {
  return fetch.get(blogBaseUrl + 'user/a054f503-1423-4e15-87eb-8870b4ce31f8/' + pagination)
}
