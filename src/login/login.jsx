import React, { useEffect, useState } from 'react'
import axios from "axios";

export const Login = () => {
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginState, setLoginState] = useState(false)


    useEffect(() => {
        if(localStorage.getItem('token') !== 'null') {
            setLoginState(true)
        }
    }, [])

    const login = () => {
        axios({
            method: 'post',
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: 'http://localhost:3000/login'
        })
            .then((res) => {
                console.log(res)
                if(res.data === 'Successfully Authenticated') {
                    setLoginState(true)
                    axios({
                        method: 'GET',
                        withCredentials: 'true',
                        url: 'http://localhost:3000/user'
                    }).then((res) => {
                        if(res.data !== '') {
                            localStorage.setItem('token', JSON.stringify(res.data))
                            setLoginState(true)
                        } else {
                            setLoginState(false)
                        }
                    })
                }
            })
    }

    const logout = () => {
        axios({
            method: 'post',
            withCredentials: 'true',
            url: 'http://localhost:3000/logout'
        }).then((res) => {
            if(res) {
                localStorage.setItem('token', 'null')
                setLoginState(false)
            }
        })
    }

    return (
        <div>
            <input type="text" placeholder='username' onChange={e => setLoginUsername(e.target.value)} />
            <input type="password" placeholder='password' onChange={e => setLoginPassword(e.target.value)} />
            <button onClick={login}>Submit</button>
            <div>
                <span>Don't have an account?</span>
                <a href="/register">Register Here!</a>
            </div>
            <div>
                {loginState === true ? <button onClick={logout}>Logout</button> : <div> </div>}
            </div>
        </div>
    )
}