import Link from 'next/link'
import React from 'react'
import { layoutProps } from '../../model/layout'
import { FaBackspace } from "react-icons/fa";

type Props = {}

const lognin = ({ children }: layoutProps) => {
    return (
        <div className='h-max bg-gradient-to-r from-purple-500 to-pink-500 '>
            <ul className='pt-[30px] pl-[50px]'>
                <li className='text-[50px] text-white'><Link href={'/'} ><FaBackspace /></Link></li>
            </ul>
            {children}
        </div>
    )
}

export default lognin