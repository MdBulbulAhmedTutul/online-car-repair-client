import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import TableRow from "./TableRow";
import Swal from "sweetalert2";

const OrderPage = () => {
    const { user } = useContext(AuthContext);
    const [bookins, setBokkingd] = useState([]);
    const url = `http://localhost:5000/singlebooking?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBokkingd(data))
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookins.filter(booking => booking._id !== id);
                            // console.log(remaining);
                            setBokkingd(remaining);
                            
                        }
                    })
            }
        });
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto my-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <h1>Delete</h1>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Services</th>
                            <th>Email</th>
                            <th>Aproved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookins.map(booking =>
                                <TableRow key={booking._id}
                                handleDelete={handleDelete}
                                    booking={booking}>
                                </TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderPage;