import React from 'react'
import { layoutProps } from '../../model/layout'

type Props = {}

const adminlayout = ({children}: layoutProps) => {
  return (
    <div>
        <div>adminlayout</div>
        {children}

    </div>
  )
}

export default adminlayout