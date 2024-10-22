import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const MainLayout = () => {
    return (
        <div className="mt-10 w-[81.25%] mx-auto">
            <Nav />
            <Outlet />
        </div>
    );
};

export default MainLayout;