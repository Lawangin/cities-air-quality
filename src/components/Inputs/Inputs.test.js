import '@testing-library/react'
import { render } from '@testing-library/react'
import Inputs from './Inputs'
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

  test('should render Inputs Component', () => {
    const { getAllByRole, debug } = customRender(<Inputs />)
    expect(getAllByRole('textbox')).toHaveLength(2)
  })
})
