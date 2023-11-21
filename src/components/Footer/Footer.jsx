import { FaGooglePlusG } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/logo.svg';
const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <img src={logo} alt="" />
                        <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                        <div className="flex items-center mt-5">
                            <a href="#"><FaGooglePlusG className="text-2xl"></FaGooglePlusG></a>
                            <a href="#"><IoLogoTwitter className="text-2xl ml-2"></IoLogoTwitter></a>
                            <a href="#"><FaInstagram className="text-2xl ml-2"></FaInstagram></a>
                            <a href="#"><FaLinkedinIn className="text-2xl ml-2"></FaLinkedinIn></a>
                        </div>
                    </div>
                    <div>
                        <h2>About us</h2>
                        <a href="">Home</a><br />
                        <a href="">Service</a><br />
                        <a href="">Contact</a>
                    </div>
                    <div>
                        <h2>Company</h2>
                        <a href="">Why car doctor</a><br />
                        <a href="">About</a>
                    </div>
                    <div>
                        <h2>Support</h2>
                        <a href="">Support Center</a><br />
                        <a href="">Fedback</a><br />
                        <a href="">Accesbility</a>
                    </div>
                </div>
            </div>
            <div className="bg-[#191919] text-white text-center py-4">
                <p>Copyright © 2023 - All right reserved by Car-doctor Ltd</p>
            </div>
        </div>
    );
};

export default Footer;