import { useLocation } from "react-router-dom"
import { LandingHeader } from "./LandingHeader";
import {AppHeader} from "./AppHeader"

export const Header = () => {
    const location = useLocation();

    if(location.pathname.includes("/login")){
        return null;
    }

    if (location.pathname === "/"){
        return <LandingHeader />
    }

    return <AppHeader />
}
