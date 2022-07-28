import React from 'react'

type Props = {}

const Signin = (props: Props) => {
  return (
    <div className={`bg-fuchsia-600 h-full`}>
        <h1>Login Form</h1>
        <div className="auth">
            <div className="login">
                <a href="">Login</a>
            </div>
            <div className="signup">
                <a href="">Signup</a>
            </div>
        </div>
        <div className="form">
            <form action="">
                <div>
                    <input type="email" placeholder='Email Address' />
                </div>
                <div>
                    <input type="password" placeholder='Password' />
                </div>
                <a href="">Forgot Password</a>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
        <div>
            <span>Not a member?</span><a href="">Signup Now</a>
        </div>
    </div>
  )
}

export default Signin