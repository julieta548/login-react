import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../Firebase/credenciales';

const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const UserSignOut = () => {
        signOut(auth).then(() => {
            console.log('cerro sesion')
        }).catch(error => console.log(error));
    }

    return (
        <div>{authUser ? <><p>"Signed in as " {authUser.email}</p> <button onClick={UserSignOut}>Sing out</button></> : <p>"Signed out"</p>}</div>
    )
}

export default AuthDetails;