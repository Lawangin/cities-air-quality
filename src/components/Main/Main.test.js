import '@testing-library/react'
import { render } from '@testing-library/react'
import Main from './Main'
import { InputsContext } from '../../context/inputs-context'

describe('Main Component', () => {
  const customRender = (ui) => {
    const providerProps = {
      inputOne: 'one ',
      inputTwo: 'two',
      setInputOne: () => {},
      setInputTwo: () => {}
    }
    return render(
      <InputsContext.Provider value={{ ...providerProps }}>
        {ui}
      </InputsContext.Provider>
    )
  }

  test('should render Main Component', () => {
    const { getByText } = customRender(<Main />)
    expect(
      getByText('Air Quality Comparison Between Cities')
    ).toBeInTheDocument()
  })
})
