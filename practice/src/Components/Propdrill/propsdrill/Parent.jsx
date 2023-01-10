import React from 'react'
import Child from './Child'

const Parent = () => {
    let x=4;
    let y=5;
  return (
    <div>
        <Child sudipa={x} vipul={y}/>
    </div>
  )
}

export default Parent