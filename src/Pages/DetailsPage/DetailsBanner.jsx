import banner from '../../assets/images/checkout/checkout.png';
const DetailsBanner = () => {
    return (
        <div className="relative">
            <img className="w-full h-[400px]" src={banner} alt="" />
            <div className="relative w-full h-full">
                <h2 className="text-3xl absolute font-bold -top-48 left-24 text-white">Details Product</h2>
            </div>
        </div>
    );
};

export default DetailsBanner;