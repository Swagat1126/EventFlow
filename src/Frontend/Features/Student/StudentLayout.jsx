import { Outlet } from "react-router-dom";
//import Navbar from "../components/Navbar"; 

const StudentLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-7xl mx-auto px-6 py-6">
                <Outlet />
            </div>
        </div>
    );
};

export default StudentLayout;
