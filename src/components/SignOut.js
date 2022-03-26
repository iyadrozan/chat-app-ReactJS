import React from 'react';
import { auth } from '../firebase';

function SignOut() {
  return (
    <div>
      <a className="btn-logout" onClick={() => auth.signOut()}>
        Sign Out
      </a>
    </div>
  );
}

export default SignOut;
