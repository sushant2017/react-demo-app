import { useState } from "react";
import counterHoc from "./counterHoc";

const HoverCounter = (props) => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>My name is {props.name} and age is {props.age}. I clicked {count} times</h1>
      <p onMouseOver={()=>setCount(count+1)}>Hover me</p>
    </>
    
  )
}

export default counterHoc(HoverCounter);