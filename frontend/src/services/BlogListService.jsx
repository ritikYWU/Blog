import endpoints from "./apiConfig";

const BlogListService = async (pagination_url) => {
    let url = endpoints.blog_posts;

    if (pagination_url) {
        url = pagination_url;
    }

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        // console.log('response', data)
        return data;
    }

    return false;
};

export default BlogListService;
