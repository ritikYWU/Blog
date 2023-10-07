import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import SearchService from "../../services/SearchService";
import Post from "../../components/post/Post";
import "./Search.css";

const Search = () => {
    const [query, setQuery] = useState();
    const [data, setData] = useState();

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await SearchService(query);
        setData(response);
        // console.log(response);
        // console.log(query);
    };

    return (
        <div className="search">
            <div className="search-article">
                <div className="input">
                    <input
                        type="text"
                        placeholder="Search Article"
                        onChange={handleChange}
                    />
                    <AiOutlineSearch
                        className="search-icon"
                        onClick={handleClick}
                    />
                </div>
            </div>
            {data ? (
                <>
                    <h3 className="query-search">Search Result for {query}</h3>
                    <div className="results">
                        {data.results.map((post) => (
                            <Post post={post} key={post.id} id={post.id} />
                        ))}
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Search;
