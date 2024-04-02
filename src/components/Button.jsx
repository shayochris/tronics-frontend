import React from 'react'

export default function Button(props) {
  const block = props.block ? 'w-full' : 'w-auto'
  const background = props.background || 'bg-gray-200'
  const color = props.textColor || 'text-black'
  const text = props.text || 'button'
  
  return (
    <button 
      className={`p-2 text-sm capitalize ${!props.disabled && color} 
      ${!props.disabled ? background : 'bg-gray-200' } ${block} rounded-lg`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {text}
    </button>
  )
}
