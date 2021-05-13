import React from 'react'

const Message = ({ variant, children }) => {
  const variantStyle = {
    background: variant === "dark" ? "#616161" : "#b71c1c",
    color: "#efefef",
    padding: 1
  }  
  
  return (
    <div style={variantStyle}>
      <h3>{children}</h3>
    </div>
  )
}

Message.defaultProps = {
  variant: 'dark',
}

export default Message
