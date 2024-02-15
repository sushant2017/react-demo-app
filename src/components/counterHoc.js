import React from "react";

const counterHoc = (Component) => {
  return () => {
    return (
      <Component name="Sumit" age="31"/>
    )
  }
}

export default counterHoc;