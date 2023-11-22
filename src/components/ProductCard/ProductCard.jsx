// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    // console.log(product);
    // eslint-disable-next-line react/prop-types
    const { img, price, title } = product;
    return (
        <div className="border-2 border-gray-300 p-2 rounded-lg bg-gray-100">
            <img className="w-full h-[220px]" src={img} alt="" />
            <h2 className="text-2xl text-center my-2 font-semibold">{title}</h2>
            <p className="text-center"><span className="font-bold mr-2">Price:</span>{price}$</p>
        </div>
    );
};

export default ProductCard;