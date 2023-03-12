import React from 'react'
import ChildComp from './child component/ChildComp'

const ParentComp = () => {

    const greetParent =()=>{
       console.log("hello parent")
    }
  return (
    <div>
      <ChildComp greetHandler={greetParent}/>
    </div>
  )
}

export default ParentComp
