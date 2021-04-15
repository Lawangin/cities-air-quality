import React from 'react'
import { Input, Button } from 'semantic-ui-react'
import './Inputs.css'

const Inputs = () => {
  return (
    <>
      <div className='inputContainer'>
        <Input placeholder='City One' className='inputStyling' />
        <Input placeholder='City Two' className='inputStyling' />
        <Button className='buttonStyling'>Compare</Button>
      </div>
    </>
  )
}

export default Inputs
