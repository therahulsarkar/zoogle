const SearchedItemTemplate = ({ data }) => {
    function createMarkup(html) {
        return { __html: html };
    }

    console.log(data)
    return (
        <div className="flex flex-col py-3 max-w-[90vw] md:max-w-[700px] ">
            <div
                className="group cursor-pointer "
                onClick={() => window.open(data.link, "_blank")}
            >
                <div className="text-sm truncate text-[#202124]">
                    {data.displayLink}
                </div>
                <div className="group-hover:underline text-xl text-[#0a2ddd] pt-2">
                    {data.title}
                </div>
            </div>
            <div
                className="text-sm text-[#4d5156] leading-6 pt-1"
                dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
            />
            <hr/>
        </div>
    );
};

export default SearchedItemTemplate;
