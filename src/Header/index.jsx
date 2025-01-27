import logo from "../images/logo-colors.svg";
import LinkButton from "../LinkButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header >
        <nav>
          <ul className={styles.list}>
            <li className={styles.logo}>
              <a href="/">
                <img src={logo} alt="jive" />
              </a>
            </li>

            <li className={styles.login}>
                <LinkButton href="/about" variant="secondary">Login</LinkButton>
            </li>

            <li className={styles.signup}>
                <LinkButton href="/signup">Signup</LinkButton>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;