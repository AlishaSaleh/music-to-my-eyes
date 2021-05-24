import React from "react";

function SignUp() {
    return (


        <div className="row">
        <form className="col-md-6 offset-md-3 bodyPad">

            <h1>Sign Up!</h1>
            <p>Please sign up below:</p>
        
            <div className="mb-3">
                <label for="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder="Kat" aria-label="firstName" />
                <label for="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder="Midden" aria-label="LastName" />
                <label for="emailAddress" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                    placeholder="name@example.com" />
            </div>
            <div className="input-group mb-3">
                <label className="form-label" for="userGender"> Please select your gender</label>
                <select className="form-select" id="userGender">
                    <option selected>Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                    <option value="5">Other/Prefer not to say</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label className="form-label" for="userInterest"> Are you interested in? </label>
                <select className="form-select" id="userInterest">
                    <option selected>Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                    <option value="5">No preference</option>
                </select>
            </div>
            
                <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
    </div>
    );
}

export default SignUp;