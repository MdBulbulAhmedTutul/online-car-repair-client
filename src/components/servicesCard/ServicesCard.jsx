import { FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ServicesCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const { price, img, title } = service;
    return (
        <div className="border-2 border-[#E8E8E8] p-2 rounded-lg">
            <img className="w-full rounded-lg h-[220px]" src={img} alt="" />
            <h2 className="text-xl font-semibold my-2">{title}</h2>
            <div className="flex items-center justify-between">
                <p><span className="font-bold mr-2">Price:</span>{price}$</p>
                <FaArrowRight className="text-[#ff3438] text-2xl mr-5"></FaArrowRight>
            </div>
        </div>
    );
};

export default ServicesCard;