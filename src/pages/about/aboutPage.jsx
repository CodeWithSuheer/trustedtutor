import { Helmet } from "react-helmet";
import HomeView from "../../sections/homeView/view/homePage";
import About from "../../sections/aboutView/About";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
            </Helmet>

            <About />
        </>
    );
};

export default AboutPage;
