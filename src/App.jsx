import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}

export default App;
