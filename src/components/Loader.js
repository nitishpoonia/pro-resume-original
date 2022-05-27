import { CircularProgress } from "@mui/material"


export const Loader = () => {
    return (
        <div style={{height: "100vh", width : "100%", display : "flex", justifyContent : "center", alignItems:"center"}}>
            <CircularProgress thickness={5} size={35} />
        </div>
    )
}