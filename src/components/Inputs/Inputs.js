import React, { useState, useContext, useEffect } from 'react'
import { Input, Button } from 'semantic-ui-react'
import './Inputs.css'
import { InputsContext } from '../../context/inputs-context'

const Inputs = () => {
  const [cityOne, setCityOne] = useState('')
  const [cityTwo, setCityTwo] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [intError, setIntError] = useState(false)

  const { setInputOne, setInputTwo } = useContext(InputsContext)

  useEffect(() => {
    if (cityOne.length > 1 && cityTwo.length > 1 && !intError) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }

    if (cityOne.match(/\d+/g) || cityTwo.match(/\d+/g)) {
      setIntError(true)
    } else {
      setIntError(false)
    }
  }, [cityTwo, cityOne, intError])

  const handleCityOneChange = (event) => {
    setCityOne(event.target.value)
  }

  const handleCityTwoChange = (event) => {
    setCityTwo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputOne(cityOne)
    setInputTwo(cityTwo)
  }

  return (
    <>
      {intError && <div className='errorStyling'>No integers in cities</div>}
      <div className='inputContainer'>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder='City One'
            className='inputStyling'
            value={cityOne}
            onChange={handleCityOneChange}
          />
          <Input
            placeholder='City Two'
            className='inputStyling'
            value={cityTwo}
            onChange={handleCityTwoChange}
          />
          <Button
            className='buttonStyling'
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Compare
          </Button>
        </form>
      </div>
    </>
  )
}

export default Inputs
