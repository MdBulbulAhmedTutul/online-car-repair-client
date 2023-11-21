import Services from "../../components/Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-8 mb-16">
                <Banner></Banner>
            </div>
            <div className="max-w-7xl mx-auto my-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Our Service Area</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
                </div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;