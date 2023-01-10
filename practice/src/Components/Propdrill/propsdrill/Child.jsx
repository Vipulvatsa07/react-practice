import React from 'react'
import ChildB from './ChildB'

const Child = (props) => {
    const {sudipa,vipul}=props
  return (
    <div>
       
        <ChildB sudipa={sudipa} yogesh={vipul}/>

    </div>
  )
}

export default Child