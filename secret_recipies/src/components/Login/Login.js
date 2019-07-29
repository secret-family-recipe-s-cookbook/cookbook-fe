import React, {useState} from "react";



const Login = (props) => {
    const []= useState()

    return (
        <div className="login-container">
            <form onSubmit={}>
                <h5>Sign In</h5>
                <div className="input-field">
                    <label>
                        Email
                        <input type="email" name="email" onChange={}/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" onChange={}/>
                    </label>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login

