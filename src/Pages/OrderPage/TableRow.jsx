import { useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const TableRow = ({ booking }) => {
    const {user} = useContext(AuthContext);
    // eslint-disable-next-line react/prop-types
    const { date, email, img, price, title } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="bg-[#ff3438] px-4 py-1 text-white font-normal rounded-md">Pending</button>
            </th>
        </tr>
    );
};

export default TableRow;