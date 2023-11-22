import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookingForm = () => {
    const { user } = useContext(AuthContext);
    const [product, setProduct] = useState([]);
    const singleData = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${singleData.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [singleData])
    const { _id, price, title, img } = product;

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;
        const order = {
            name,
            date,
            price,
            email,
            service: _id,
            img,
            title
        }
        // console.log(order);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire("Booking Successfull");
                }
            })
    }
    return (
        <div className="max-w-5xl mx-auto bg-gray-100 p-10 rounded-xl">
            <h2 className="text-3xl font-semibold text-center mb-4">Booking Now {title}</h2>
            <form onSubmit={handleOrder}>
                <div className="flex items-center flex-col md:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" defaultValue={user.displayName} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full lg:ml-3">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex items-center flex-col md:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full lg:ml-3">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                </div>
                <button className="bg-[#ff3438] w-full px-4 py-2 
            mt-3 rounded-lg text-white font-semibold">Cofirm Order</button>
            </form>
        </div>
    );
};

export default BookingForm;