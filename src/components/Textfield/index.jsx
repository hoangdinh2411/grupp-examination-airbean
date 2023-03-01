import React from 'react'

export default function Textfield(props) {
  const { label, ...rest } = props
  return (
    <div className='fields'>
      {label ? (
        <label className='fields__label' htmlFor={'field-' + props.name}>
          {label}
        </label>
      ) : null}
      <div className='fields__input'>
        <input {...rest} id={'field-' + props.name} />
      </div>
    </div>
  )
}
