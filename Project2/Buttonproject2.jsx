import React from 'react'
import './Buttonp2.css';

const ButtonProject2 = ({isSecond,icon,text}) => {
  return (
    <div>
            <button className={isSecond?'Second':'hii'}> 
                {icon}
                {text}
            </button>
    </div>
  )
}

export default ButtonProject2
