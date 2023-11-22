import BookingBanner from "./BookingBanner";
import BookingForm from "./BookingForm";

const BookingPage = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-8 mb-16">
                <BookingBanner></BookingBanner>
            </div>
            <div className="mt-8 mb-16">
                <BookingForm></BookingForm>
            </div>
        </div>
    );
};

export default BookingPage;