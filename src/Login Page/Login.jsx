import { Link } from "react-router-dom";


function Login() {


    return (
        <div className="container">


        <form action="" method="post" className="form-container" noValidate>
        <h1>Sign-in</h1>
            <div className="input-fields">
                <input
                 type="text" 
                 placeholder="Username"
                 />
                <input 
                type="password"
                 placeholder="Password"
                 />
                <a className="forgot-password" href="#">Forgot Password?</a>
                <button type="submit">Sign-in</button>
            </div>
            <div>
                <p>or sign-up with:</p>
                <p>Not a member? <Link to={"/register"} className="link" >Register</Link> </p>
            </div>
        </form>


        </div>
    )

}

export default Login;