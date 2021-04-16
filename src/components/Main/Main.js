import React, { useState, useEffect, useContext } from 'react'
import { Container, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Main.css'

import { InputsContext } from '../../context/inputs-context'
import Inputs from '../Inputs/Inputs'

const Main = () => {
  const [firstCity, setFirstCity] = useState([])
  const [secondCity, setSecondCity] = useState([])
  const [hasNoResults, setHasNoResults] = useState(false)

  const { inputOne, inputTwo } = useContext(InputsContext)

  useEffect(() => {
    // node.js cannot test replaceAll function, therefore use regex
    const regex = /\s/g
    const inputOneFixed = inputOne.replace(regex, '%20')
    const inputTwoFixed = inputTwo.replace(regex, '%20')

    const fetchDataOne = async () => {
      try {
        const data = await fetch(
          `https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&city=${inputOneFixed}&order_by=lastUpdated&dumpRaw=false`
        )
        const { results } = await data.json()
        if (results.length > 0) {
          setFirstCity(results)
          setHasNoResults(false)
        } else {
          setHasNoResults(true)
        }
      } catch (e) {
        alert('Validation error caused by first city query')
      }
    }
    const fetchDataTwo = async () => {
      try {
        const data = await fetch(
          `https://docs.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&city=${inputTwoFixed}&order_by=lastUpdated&dumpRaw=false`
        )
        const { results } = await data.json()
        if (results.length > 0) {
          setSecondCity(results)
          setHasNoResults(false)
        } else {
          setHasNoResults(true)
        }
      } catch (e) {
        alert('Validation error caused by second city query')
      }
    }

    if (inputOneFixed.length > 0 && inputTwoFixed.length > 0) {
      fetchDataOne()
      fetchDataTwo()
    }
  }, [inputOne, inputTwo])

  const cardComponent = (cityData) =>
    cityData
      ? cityData.map((city) => (
          <Card key={city.id} className='cardStyling'>
            <Card.Content header={`${city.city}, ${city.country}`} />
            <Card.Content>
              <p>Air Quality Info</p>
              {city.parameters.map((el) => (
                <div key={el.id}>
                  <p>
                    {el.displayName}: {el.average} {el.unit}
                  </p>
                </div>
              ))}
            </Card.Content>
          </Card>
        ))
      : null

  const noResult = () => {
    if (firstCity.length === 0) {
      return (
        <Card>
          <Card.Content
            header={`"${inputOne}" returned no results. Check spelling or city doesn't exist in data.`}
          />
        </Card>
      )
    }
    if (secondCity.length === 0) {
      return (
        <Card>
          <Card.Content
            header={`"${inputTwo}" returned no results. Check spelling or city doesn't exist in data.`}
          />
        </Card>
      )
    }
  }

  return (
    <>
      <Container className='mainContainer'>
        <h1>Air Quality Comparison Between Cities</h1>
        <Inputs />
        <br />
        {firstCity.length > 0 && secondCity.length > 0 ? (
          <section className='sectionContainer'>
            <div className='cardContainer'>
              <h3>CITY ONE:</h3> {cardComponent(firstCity)}
            </div>
            <div className='cardContainer'>
              <h3>CITY TWO:</h3> {cardComponent(secondCity)}
            </div>
          </section>
        ) : hasNoResults ? (
          noResult()
        ) : null}
      </Container>
    </>
  )
}

export default Main
