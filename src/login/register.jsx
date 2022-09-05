import React, {useState} from 'react'
import axios from 'axios'

export const Register = () => {
    const [registerUsername, setRegisterUsername] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerAdmin, setRegisterAdmin] = useState(false)


    const register = () => {
        axios({
            method: 'post',
            data: {
                username: registerUsername,
                password: registerPassword,
                admin: registerAdmin,
            },
            withCredentials: true,
            url: 'http://localhost:3000/register'
        })
            .then((res) => console.log(res))
    }

    const handleChange = (e) => {
        setRegisterAdmin(e.target.checked)
    }

    return (
        <div>
            <input type="text" placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
            <input type="password" placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
            <input type="checkbox" onChange={handleChange}/>
            <button onClick={register}>Submit</button>
        </div>
    )
}