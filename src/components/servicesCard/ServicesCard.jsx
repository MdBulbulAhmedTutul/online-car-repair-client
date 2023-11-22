import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServicesCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, price, img, title } = service;
    return (
        <div className="border-2 border-[#E8E8E8] p-2 rounded-lg">
            <img className="w-full rounded-lg h-[220px]" src={img} alt="" />
            <h2 className="text-xl font-semibold my-2">{title}</h2>
            <div className="flex items-center justify-between">
                <p><span className="font-bold mr-2">Price:</span>{price}$</p>
                <Link to={`/details/${_id}`}>
                    <FaArrowRight className="text-[#ff3438] text-2xl mr-5"></FaArrowRight>
                </Link>
            </div>
            <Link to={`/booking/${_id}`}>
                <button className="bg-[#ff3438] text-white font-semibold px-4 py-2 rounded-lg mt-2">Book Now</button>
            </Link>
        </div>
    );
};

export default ServicesCard;