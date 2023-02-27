import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { query } = useParams(); //To extract query parameters from URL
    const [searchQuery, setSearchQuery] = useState(query || ""); //For the search bar text 
    const navigate = useNavigate();

    const searchHandler = (e) => {
        //If user presses enter and the search box is not empty then navigate to the path 
        if (e?.key === "Enter" && searchQuery?.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    };
    return (
        <div
            id="searchBox"
            className="h-[50px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-light hover:border-0 focus-within:shadow-light focus-within:border-0"
        >
            <AiOutlineSearch size={20}  color="#9aa0a6" />
            <input
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchHandler}
                value={searchQuery}
                autoFocus
                className="grow outline-0 text-black/[0.87]"
            />
            <div className="flex items-center gap-3">
                {searchQuery && (
                    <IoMdClose
                        size={25}
                        color="#70757a"
                        className="cursor-pointer"
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <img className="h-8 w-8 cursor-pointer hover:bg-black/[0.07] rounded-full p-[5px]" src={MicIcon} alt="Voice" />
                <img
                    className="h-8 w-8 cursor-pointer hover:bg-black/[0.07] rounded-full p-[5px]"
                    src={ImageIcon}
                    alt="Lens"
                />
            </div>
        </div>
    );
};

export default SearchInput;
