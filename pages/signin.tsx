import React from 'react'

type Props = {}

const Signin = (props: Props) => {
  return (
    <div className={`bg-fuchsia-600 h-screen relative`}>
        <div className={`bg-white absolute left-1/3 top-48 text-center`}>
        <h1 className={`text-6xl py-8 px-8 `}>Login Form</h1>
        <div className={`auth flex justify-center pb-8 px-32`}>
            <div className={` border-slate-900 border py-3  border-solid rounded  bg-fuchsia-600`}>
                <a href="" className={` text-white px-16 no-underline font-bold`} >Login</a>
            </div>
            <div className={` border-slate-900 border  py-3 border-solid rounded `}>
                <a href=""  className={` px-16 no-underline`}>Signup</a>
            </div>
        </div>
        <div className="form">
            <form action="">
                <div >
                    <input className={`p-4  my-4 border-slate-900 border w-96 border-solid rounded`} type="email" placeholder='Email Address'  />
                </div>
                <div >
                    <input className={`p-4  my-4 border-slate-900 border w-96 border-solid rounded`} type="password" placeholder='Password'  />
                </div>
                <div className={`text-left pl-32 text-purple-600 my-2`}>
                    <a href="">Forgot Password</a>
                </div>
                <div>
                    <button className={ ` my-4 border-slate-900 border py-4 w-96 border-solid px-16 font-bold rounded text-white bg-fuchsia-600`}>Login</button>
                </div>
            </form>
        </div>
        <div className={`my-8`}>
            <span>Not a member?</span><a href="" className={`text-purple-600`}>Signup Now</a>
        </div>
        </div>
    </div>
  )
}

export default Signin