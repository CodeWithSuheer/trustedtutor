import { Helmet } from "react-helmet";
import HomeView from "../../sections/homeView/view/homePage";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
            </Helmet>

            <HomeView />
        </>
    );
};

export default AboutPage;
