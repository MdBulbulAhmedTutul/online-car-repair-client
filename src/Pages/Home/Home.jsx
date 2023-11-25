import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";
import Teams from "../../components/Teams/Teams";
import About from "./About";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-8 mb-16">
                <Banner></Banner>
            </div>
            <div className="mt-8 mb-16 px-4">
                <About></About>
            </div>
            <div className="max-w-7xl mx-auto my-16">
                
                <Services></Services>
            </div>
            <div className="max-w-7xl mx-auto my-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Browse Our Products</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
                </div>
                <Products></Products>
            </div>
            <div className="max-w-7xl mx-auto my-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
                </div>
                <Teams></Teams>
            </div>
        </div>
    );
};

export default Home;