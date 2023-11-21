import { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailsInfo = () => {

    const [details, setDetails] = useState([]);
    const singleData = useParams();
    console.log(singleData)
    useEffect(() => {
        fetch(`http://localhost:5000/service/${singleData.id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [singleData])
    console.log(details);
    const { img, title, description} = details;
    return (
        <div className="px-4">
            <img className="w-full rounded-lg h-[380px]" src={img} alt="" />
            <h2 className="text-3xl font-semibold my-4">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default DetailsInfo;