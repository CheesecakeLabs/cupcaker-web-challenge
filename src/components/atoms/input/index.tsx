import React from 'react'

import styles from './styles.module.scss'

interface InputProps {
  typeRegister: React.ReactNode
  name: string
  disabled?: boolean | undefined
  value?: number
}

const Input = ({ typeRegister, name, disabled, value }: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        className={styles.input}
        type="text"
        {...typeRegister}
        disabled={disabled}
        value={value}
      />
    </>
  )
}

export { Input }
