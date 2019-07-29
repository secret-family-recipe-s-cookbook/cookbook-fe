import React, {useState} from "react";



const Login = (props) => {
    const [email, setEmail]= useState()
    const [password, setPassword] = useState()

    return (
        <div className="login-container">
            <form >
                <h5>Sign In</h5>
                <div className="input-field">
                    <label>
                        Email
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" />
                    </label>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login

