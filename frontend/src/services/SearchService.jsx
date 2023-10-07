import endpoints from "./apiConfig";

const SearchService = async (query) => {
    const url = endpoints.search;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    if (response.ok) {
        const data = await response.json();
        // console.log("data", data);
        return data;
    } else {
        console.log("Something went wrong");
    }
};

export default SearchService;
