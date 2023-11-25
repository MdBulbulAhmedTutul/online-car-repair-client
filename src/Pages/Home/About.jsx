import about2 from '../../assets/images/about_us/person.jpg';
const About = () => {
    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">About Us</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className='flex items-center flex-col md:flex-row'>
                <div className='flex-1'>
                    <img src={about2} alt="" />
                </div>
                <div className='flex-1 lg:ml-10'>
                    <h2 className='text-3xl font-semibold mb-4'>We are qualified & of experience <br /> in this field</h2>
                    <p className='mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                    <button className='px-4 py-2 rounded-lg bg-[#ff3438] text-white font-bold mt-3'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;