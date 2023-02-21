import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../Firebase/credenciales';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        });

    }
    return (
        <div className='sign-in-container'>
            <form onSubmit={SignIn}>
                <h1>Log in to your Account</h1>
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder='contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default SignIn;