import React, {useState} from "react";
//import { Button, Modal } from 'semantic-ui-react'


const Login = (props) => {
    const [show, setShow] = useState(false);
    const [email, setEmail]= useState()
    const [password, setPassword] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return (
        <div className="login-container">
           {/* <Modal
                trigger={<Button>Show Modal</Button>}
                header='Reminder!'
                content='Call Benjamin regarding the reports.'
                actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
            /> */}
            
        </div>
    )
}

export default Login

   {/* <form >
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
            </form> */}