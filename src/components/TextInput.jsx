import React from 'react'

export default function TextInput(props) {
  const block = props.block ? 'w-full' : ''
  const style = props.style
  const type = props.type || 'text'
  
  return (
    <div>
      {props.label && <label className='label'>{props.label}</label>}
      <input 
        type ={type}
        className={`input ${block} ${style}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required ={props.required}
      />
    </div>
  )
}
