import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import TableRow from "./TableRow";

const OrderPage = () => {
    const { user } = useContext(AuthContext);
    const [bookins, setBokkingd] = useState([]);
    const url = `http://localhost:5000/singlebooking?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBokkingd(data))
    }, [url])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto my-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
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