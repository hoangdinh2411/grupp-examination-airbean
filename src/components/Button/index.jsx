import React from 'react'

export default function Button(props) {
  const { children, variant = '', ...rest } = props
  return (
    <button className={`btn ${variant}`} {...rest}>
      {children}
    </button>
  )
}
