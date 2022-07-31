import React from 'react'

type Props = {}

const admin = (props: Props) => {
    return (
        <div className="flex" >
            <div className="w-1/6 h-screen bg-stone-300 text-center">
            <a href="index.html" className="no-underline text-6xl"> Admin</a>
                <ul className="p-0 my-20" >
                            <li className="my-8 text-4xl hover:border-slate-900 hover:border-2 py-3 hover:border-solid "><a className="no-underline text-black " href="" >Product</a></li>
                            <li className="my-8 text-4xl hover:border-slate-900 hover:border-2 py-3 hover:border-solid"><a className="no-underline text-black " href="">Category</a></li>
                            <li className="my-8 text-4xl hover:border-slate-900 hover:border-2 py-3 hover:border-solid"><a className="no-underline text-black " href="">User</a></li>
                </ul>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>ID</tr>
                        <tr>Name</tr>
                        <tr></tr>
                        <tr></tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default admin