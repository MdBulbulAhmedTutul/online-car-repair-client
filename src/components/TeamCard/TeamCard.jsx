import { FaGooglePlusG } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const TeamCard = ({ team }) => {
    // eslint-disable-next-line react/prop-types
    const { img, title, desc } = team;
    return (
        <div className="border-2 border-gray-100 p-2 rounded-lg">
            <img className="w-full h-[220px] rounded-lg" src={img} alt="" />
            <h2 className="text-2xl text-center mt-2 font-semibold">{title}</h2>
            <p className="text-center">{desc}</p>
            <div className="flex items-center mt-5 justify-center">
                <a href="#" className=""><FaGooglePlusG className="text-2xl "></FaGooglePlusG></a>
                <a href="#" className=""><IoLogoTwitter className="text-2xl  ml-2"></IoLogoTwitter></a>
                <a href="#" className=""><FaInstagram className="text-2xl  ml-2"></FaInstagram></a>
                <a href="#" className=""><FaLinkedinIn className="text-2xl  ml-2"></FaLinkedinIn></a>
            </div>
        </div>
    );
};

export default TeamCard;