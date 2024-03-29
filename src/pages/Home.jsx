import Banner from "../components/Banner/Banner";
import { Brands } from "../components/Brands/Brands";
import { GallerySection } from "../components/Gallery_Section/GallerySection";
import TopServices from "../components/Top_Services/TopServices";
import WeWorkWith from "../components/Work_With/WeWorkWith";
import AboutUs from "../components/about_us/AboutUs";
import ContactUs from "../components/contact_us/ContactUs";
import CountSection from "../components/count_section/CountSection";
import Reviews from "../components/reviews/Reviews";
import What_We_Do from "../components/what_we_do/What_We_Do";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <What_We_Do></What_We_Do>
            <TopServices></TopServices>
            <AboutUs></AboutUs>
            <Brands></Brands>
            <GallerySection></GallerySection>
            <CountSection></CountSection>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <WeWorkWith></WeWorkWith>
        </div>
    );
};

export default Home;