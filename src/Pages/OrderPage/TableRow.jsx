import { useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
// import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const TableRow = ({ booking, handleDelete, handleBookingCinfirm }) => {
    const { user } = useContext(AuthContext);
    // eslint-disable-next-line react/prop-types
    const { _id, date, email, img, price, title, ststus } = booking;
    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user.displayName}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>
            <td>
                $ {price}
            </td>
            <td>
                {title}
            </td>
            <td>{email}</td>
            <th>
                {
                    ststus === 'confirm' ? <span className="px-4 py-1 font-semibold border-2 border-green-800
                    font-normal rounded-md">confirm</span> :
                    <button onClick={() => handleBookingCinfirm(_id)} className="bg-[#ff3438] px-4 py-1 text-white
                 font-normal rounded-md">Pending</button>
                }
            </th>
        </tr>
    );
};

export default TableRow;