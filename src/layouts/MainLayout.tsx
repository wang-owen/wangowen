import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <>
            <div className="bg-[#fffffa] text-black">
                <Navbar />
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
