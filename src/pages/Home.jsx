import Banner from "../components/Banner/Banner";
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
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <CountSection></CountSection>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;