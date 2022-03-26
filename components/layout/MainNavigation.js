import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import Image from "next/image";
import styles from "./MainNavigation.module.css";

import { authActions } from "../../stores/auth";

function MainNavigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);

  const signOutHandler = () => {
    dispatch(authActions.signOut());
  };

  return (
    <header className={`${styles.main_header} ${styles.container}`}>
      <div className={styles.main_header__brand}>
        <Link href="/">
          <img src="logo.png" alt="T2T logo"></img>
        </Link>
        Teams 2 Teams
      </div>
      <nav className={styles.main_nav}>
        <ul className={styles.main_nav__items}>
          <li
            className={`${styles.main_nav__item} ${styles.main_nav__item__cta}`}
          >
            <Link href="/">Menu #1</Link>
          </li>
          <li className={styles.main_nav__item}>
            <Link href="/">Menu #2</Link>
          </li>
          <li className={styles.main_nav__item}>
            {!isAuth && <Link href="/sign_in">Sign In</Link>}
            {isAuth && (
              <span onClick={signOutHandler}>Sign Out ({`${userId}`})</span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
