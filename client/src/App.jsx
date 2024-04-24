import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="*" element={<h1>Ups1</h1>} />
        </Routes>
    );
}

export default App;
