import DetailsBanner from "./DetailsBanner";
import DetailsInfo from "./DetailsInfo";
import RightSideNav from "./RightSideNav";

const DetailPage = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-8 mb-16 max-w-7xl mx-auto">
                <DetailsBanner></DetailsBanner>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
                <div className="col-span-2">
                    <DetailsInfo></DetailsInfo>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;