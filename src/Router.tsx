import { BrowserRouter, Routes, Route } from "react-router-dom"

import Calendar from "./pages/Calendar";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Setting from "./pages/Setting";
import Today from "./pages/Today";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/today" element={<Today />} />
                <Route path="/calender" element={<Calendar />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router