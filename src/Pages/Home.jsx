import Banner2Ad from "../Component/Banner2Ad";
import Footer from "../Component/Footer";
import ImageBanner from "../Component/ImageBanner";
import Navbar from "../Component/Navbar";
import Scanner from "../Component/Scanner";
import SearchTab from "../Component/SearchTab";
import UsaAd from "../Component/UsaAd";

function Home(){
    return (
    <>
     <Navbar/>
     <SearchTab/>
     <Scanner/>
     <ImageBanner/>
     <UsaAd/>
     <Banner2Ad/>
     <Footer/>
    </>
    )
}
export default Home;