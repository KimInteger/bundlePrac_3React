import React from 'react'
import basicData from '../static/basic_data'
import Minam from './Minam'
import UlTag from './ulTag'
import UlLi from './UlLi'
import integer from '../static/integer'


const App : React.FC = () => {
  return (
    <div>
      <Minam textNode={basicData} />
      <h1>안녕?</h1>
      <UlTag />
      <UlLi listitem={integer} />
    </div>
  )
}

export default App