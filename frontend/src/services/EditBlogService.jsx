import endpoints from "./apiConfig";

const EditBlogService = async (data, id) => {
    const token = localStorage.getItem("accessToken");

    let url = endpoints.edit + id + "/";

    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: data,
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
};

export default EditBlogService;
