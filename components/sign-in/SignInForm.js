import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useRef } from 'react';

import styles from "./SignInForm.module.css";

import { authActions } from "../../stores/auth";

function SignInForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userNameRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    dispatch(authActions.signIn(userNameRef.current.value));
    router.replace('/');
  }

  return (
    <section className={styles.auth}>
      <h1>Sign in</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="userName">User mame:</label>
          <input id="userName" type="text" ref={userNameRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor="userPwd">Password:</label>
          <input id="userPwd" type="password" />
        </div>
        <div className={styles.actions}>
          <button type="submit" className={styles.toggle}>
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
}

export default SignInForm;
