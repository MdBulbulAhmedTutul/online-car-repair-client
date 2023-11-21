import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login/register.jpg';
import { FaGooglePlusG } from 'react-icons/fa';
const Login = () => {
    return (
        <div className='flex items-center flex-col md:flex-row max-w-7xl mx-auto bg-gray-100 p-10 mt-7 mb-16'>
            <div className='w-full'>
                <img className='w-full h-[500px]' src={loginImage} alt="" />
            </div>
            <div className='w-full'>
                <h2 className='text-3xl font-semibold mb-4 text-center'>Please Login Now</h2>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    </div>
                    <input className="bg-[#E3B577] px-6 py-2 rounded-lg font-bold mt-4 text-black w-full cursor-pointer" type="submit" value="Login Now" />
                </form>
                <button className="bg-[#E3B577] flex items-center justify-center px-6 py-2 rounded-lg font-bold mt-4 text-black w-full">Login with Google<FaGooglePlusG className='text-2xl ml-2'></FaGooglePlusG></button>
                <p className='text-center font-bold my-3'>Dont have an account <Link className='text-[#ff3438] text-xl' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;