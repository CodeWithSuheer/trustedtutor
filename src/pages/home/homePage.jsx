import { Helmet } from "react-helmet";
import HomeView from "../../sections/homeView/view/homePage";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TrustedTutor</title>
            </Helmet>

            <HomeView />
        </>
    );
};

export default HomePage;
