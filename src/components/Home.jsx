import Logo from "../assets/logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="h-[100vh] flex flex-col">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-24">
                    <img
                        className="w-[160px] md:w-[272px] mb-8"
                        src={Logo}
                        alt="Logo"
                    />
                    <SearchInput />
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-3xl border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-light2">
                            Google Search
                        </button>
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-3xl border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-light2">
                            I'm Feeling Lucky
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;