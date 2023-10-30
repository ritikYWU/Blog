import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import SearchService from "../../services/SearchService";
import Post from "../../components/post/Post";
import "./Search.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Search = () => {
    const [query, setQuery] = useState();
    const [data, setData] = useState();
    const isLoggedIn = localStorage.getItem("accessToken");

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
        <>
            <Navbar isLoggedIn={isLoggedIn} />

            <div className="search">
                <div className="search-article">
                    <form className="input">
                        <input
                            type="text"
                            placeholder="Search Article"
                            onChange={handleChange}
                        />
                        <button onClick={handleClick} className="search-icon">
                            <AiOutlineSearch />
                        </button>
                    </form>
                </div>
                {data ? (
                    <>
                        <h3 className="query-search">
                            Search Result for {query}
                        </h3>
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
            <Footer />
        </>
    );
};

export default Search;
