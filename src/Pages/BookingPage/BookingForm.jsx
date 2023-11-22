const BookingForm = () => {
    return (
        <div className="max-w-5xl mx-auto bg-gray-100 p-10 rounded-xl">
            <h2 className="text-3xl font-semibold text-center mb-4">Booking Now</h2>
            <div className="flex items-center flex-col md:flex-row">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control w-full lg:ml-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
            </div>
            <div className="flex items-center flex-col md:flex-row">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control w-full lg:ml-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
            </div>
            <button className="bg-[#ff3438] w-full px-4 py-2 mt-3 rounded-lg text-white font-semibold">Add Booking</button>
        </div>
    );
};

export default BookingForm;