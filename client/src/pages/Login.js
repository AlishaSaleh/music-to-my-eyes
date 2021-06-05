import React, { Component } from "react";
<<<<<<< HEAD
import API from "../utils/API";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        API.loginUser(user);
    };

    render() {
        const { errors } = this.state;


        return (


            <div className="row" >
                <form noValidate onSubmit={this.onSubmit} className="col-md-6 offset-md-3 bodyPad">

                    <h1>Login</h1>
                    <p>Please sign up below:</p>

                    <div className="mb-3">
                       
                        <label for="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email"
                            placeholder="name@example.com" onChange={this.onChange}
                            value={this.state.email}
                            error={this.state.email} />

                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.onChange}
                            value={this.state.password}
                            error={this.state.password}
                        />
                        <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                </form>
             </div>

        );
    }
=======
//import API from "../utils/API";

function Login() {


    return (


        <div className="row" >
            <form noValidate onSubmit={this.onSubmit} className="col-md-6 offset-md-3 bodyPad">

                <h1>Login</h1>
                <p>Please sign up below:</p>

                <div className="mb-3">

                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email"
                        placeholder="name@example.com" onChange={this.onChange}
                        value={this.state.email}
                        error={this.state.email} />

                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={this.onChange}
                        value={this.state.password}
                        error={this.state.password}
                    />
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        </div>

    );
>>>>>>> 4198e6366a0dfac436b037d567b5f9e264d9aa1c
}


export default Login;