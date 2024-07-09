import React from 'react'
import basicData from '../static/basic_data'
import Minam from './Minam'
import UlTag from './ulTag'


const App : React.FC = () => {
  return (
    <div>
      <Minam textNode={basicData} />
      <h1>안녕?</h1>
      <UlTag />
    </div>
  )
}

export default App