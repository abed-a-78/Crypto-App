import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Crypto App</h1>
                <p>
                    <a href="https://github.com/abed-a-78/Crypto-App">My Crypto App</a>
                </p>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developers by Hossein with ❤️</p>
            </footer>
        </>
    );
};

export default Layout;