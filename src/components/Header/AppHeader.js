import { useAuth } from "../../context/AuthContext"

export const AppHeader = () => {
    const { authLoading, signout } = useAuth();
    return <>
        {!authLoading ?
            <>
                <h1>App Header</h1>
                <button onClick={() => {signout()}}>
                    Logout
                </button>
            </>
            : null
        }
    </>
}