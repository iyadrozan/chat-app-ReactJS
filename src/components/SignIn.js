import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <div>
        <a className="btn-signin" onClick={signInWithGoogle}>
          Sign In With Google
        </a>
      </div>
    </>
  );
}

export default SignIn;
