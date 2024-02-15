import { useState } from "react";
import counterHoc from "./counterHoc";

const ClickCounter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>My name is {props.name} and age is {props.age}. I hovered {count} times </p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </>
  )
}

export default counterHoc(ClickCounter);