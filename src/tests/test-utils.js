import React from 'react'
import { render } from '@testing-library/react'

import { Provider } from '../context/Provider'
import initialState from '../context/initialState'

function customRender(ui, { initState = initialState } = {}) {
  function Wrapper(props) {
    return <Provider initState={initState} {...props} />
  }
  return render(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }