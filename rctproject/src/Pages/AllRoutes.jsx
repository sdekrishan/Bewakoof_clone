import {Routes,Route} from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Login from "./Login";
import Home from "./Home";
import MobileCover from "./MobileCover";
const AllRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/men-clothing" element={<Men/>}></Route>
            <Route path="/women-clothing" element={<Women/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/mobile-covers-india" element={<MobileCover/>}></Route>
        </Routes>
    )
}

export default AllRoutes