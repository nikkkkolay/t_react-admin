import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import styles from "./App.module.css";

function MainPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={styles.logo} alt="React logo" />
                </a>
            </div>
            <h1>Json server + React admin</h1>
            <div className={styles.card}>
                <button onClick={() => navigate("/admin")}>navigate admin page</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    );
}

export default MainPage;
