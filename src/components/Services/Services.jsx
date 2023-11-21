import { useEffect, useState } from "react";
import ServicesCard from "../servicesCard/ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
        </div>
    );
};

export default Services;