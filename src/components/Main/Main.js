import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import './Main.css'

import Inputs from '../Inputs/Inputs'

const Main = () => {
  const [citiesData, setCitiesData] = useState([])

  useEffect(async () => {
    const data = fetch('https://docs.openaq.org/v2/locations?location=61494')
    const { results } = await (await data).json()
    console.log(results)
    setCitiesData(results)
  }, [])

  return (
    <>
      <Container className='container'>
        <Inputs />
        <div>
          {citiesData.map((el) => {
            return el.city
          })}
        </div>
      </Container>
    </>
  )
}

export default Main
