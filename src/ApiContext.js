import React from 'react'

const ApiContext = React.createContext({
  regions: [],
  dogs: [],
  addDog: () => {},
  updateDog: () => {},
})

export default ApiContext