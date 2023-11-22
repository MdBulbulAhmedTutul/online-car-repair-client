import image from '../../assets/images/404/404.jpg';
const ErrorPage = () => {
    return (
        <div>
            <img className='w-full h-[100vh]' src={image} alt="" />
        </div>
    );
};

export default ErrorPage;