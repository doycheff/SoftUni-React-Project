import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.homePage}>
            <div className={styles.container}>
                <div className={styles.welcomeMessage}>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        TechHaven
                    </h2>
                    <div className={styles.buttonContainer}>
                        <Link to={'/products'} className={styles.booksButton}>View all products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}