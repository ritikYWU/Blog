import endpoints from "./apiConfig"

const BlogListService = async () => {
    const url = endpoints.blog_posts

    const response = await fetch(url)

    if (response.ok){
        const data = await response.json()
        // console.log('response', data)
        return data
    }

    return false
}

export default BlogListService