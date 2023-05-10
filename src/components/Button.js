import React from 'react'

const Button = ({handleCheck, text}) => {
    return ( <button className="button"  onClick={handleCheck}>{text}</button> );
}
 
export default Button;