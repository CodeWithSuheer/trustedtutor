import { Helmet } from "react-helmet";
import HomeView from "../../sections/homeView/view/homePage";

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>

            <HomeView />
        </>
    );
};

export default ContactPage;
