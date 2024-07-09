import React from 'react'
import basicData from '../static/basic_data'
import Minam from './Minam'


const App : React.FC = () => {
  return (
    <div>
      <Minam textNode={basicData} />
      <h1>안녕?</h1>
    </div>
  )
}

export default App