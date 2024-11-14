// MainLayout.tsx
import { Outlet } from "react-router-dom";
import NavBar from "@/components/common/NavBar";

const MainLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            {/* NavBar를 왼쪽에 고정 */}
            <NavBar />
            {/* 오른쪽에 Outlet이 가로로 배치되도록 설정 */}
            <div style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
