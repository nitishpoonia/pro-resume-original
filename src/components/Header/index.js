import { useLocation } from "react-router-dom"
import { LandingHeader } from "./LandingHeader";
import {AppHeader} from "./AppHeader"

export const Header = () => {
    const location = useLocation();
    const excludePaths = ["/register", "/login"];
    if (excludePaths.includes(location.pathname)){
        return null;
    }

    if (location.pathname === "/"){
        return <LandingHeader />
    }

    return <AppHeader />
}
