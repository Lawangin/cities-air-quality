import React, { createContext, useState } from 'react'

export const InputsContext = createContext(null)

export default (props) => {
  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')

  return (
    <InputsContext.Provider
      value={{
        inputOne,
        inputTwo,
        setInputOne,
        setInputTwo
      }}
    >
      {props.children}
    </InputsContext.Provider>
  )
}
