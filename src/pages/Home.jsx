import Banner from "../components/Banner/Banner";
import AboutUs from "../components/about_us/AboutUs";
import What_We_Do from "../components/what_we_do/What_We_Do";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <What_We_Do></What_We_Do>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;