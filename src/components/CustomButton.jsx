import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-sm text-white px-4 rounded-xl ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton