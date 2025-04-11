import { Helmet } from "react-helmet";
import HomeView from "../../sections/homeView/view/homePage";
import Contact from "../../sections/contactView/Contact";

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>

            <Contact />
        </>
    );
};

export default ContactPage;
