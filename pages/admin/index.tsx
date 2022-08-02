import React from 'react'
import adminlayout from '../../components/Layout/adminlayout'

type Props = {}

const admin = (props: Props) => {
    return (
       <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <div className="max-w-6xl mx-auto py-5 px-4 sm:px-5 lg:px-7">
                Add
            </div>
        </div>
       </div>
    )
}
admin.Layout = adminlayout
export default admin