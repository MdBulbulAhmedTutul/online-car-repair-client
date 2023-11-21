import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegFileWord } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] px-6 py-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Services</h2>
                <button className="hover:bg-[#ff3438] mb-2 hover:text-white bg-white text-black px-4 py-2 flex items-center justify-evenly rounded-md w-full">
                    <span>Full Car Repair</span>
                    <FaLongArrowAltRight className="text-2xl mb-2"></FaLongArrowAltRight>
                </button>
                <button
                    className="hover:bg-[#ff3438] mb-2 hover:text-white bg-white text-black px-4 py-2 flex items-center justify-evenly rounded-md w-full"><span>Engine Repair</span>
                    <FaLongArrowAltRight className="text-2xl mb-2"></FaLongArrowAltRight>
                </button>
                <button
                    className="hover:bg-[#ff3438] mb-2 hover:text-white bg-white text-black px-4 py-2 flex items-center justify-evenly rounded-md w-full"><span>Automatic Services</span>
                    <FaLongArrowAltRight className="text-2xl mb-2"></FaLongArrowAltRight>
                </button>
                <button
                    className="hover:bg-[#ff3438] mb-2 hover:text-white bg-white text-black px-4 py-2 flex items-center justify-evenly rounded-md w-full"><span>Engine Oil Change</span>
                    <FaLongArrowAltRight className="text-2xl mb-2"></FaLongArrowAltRight>
                </button>
                <button
                    className="hover:bg-[#ff3438] mb-2 hover:text-white bg-white text-black px-4 py-2 flex items-center justify-evenly rounded-md w-full"><span>Battery Charge</span>
                    <FaLongArrowAltRight className="text-2xl mb-2"></FaLongArrowAltRight>
                </button>
            </div>
            <div className="bg-[#000] mt-4 px-8 py-6 text-white rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Download</h2>
                <div className="flex items-center justify-between">
                    <FaRegFileWord className="text-2xl"></FaRegFileWord>
                    <div>
                        <h2>Our Brochure</h2>
                        <p>Download</p>
                    </div>
                    <FaLongArrowAltRight className="text-2xl"></FaLongArrowAltRight>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <FaRegFileWord className="text-2xl"></FaRegFileWord>
                    <div>
                        <h2>Company Details</h2>
                        <p>Download</p>
                    </div>
                    <FaLongArrowAltRight className="text-2xl"></FaLongArrowAltRight>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;