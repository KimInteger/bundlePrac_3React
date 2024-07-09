import LiTag from './liTag'
import itemOne from "../static/li_data_one"
import itemTwo from "../static/li_data_two"
import itemThr from "../static/li_data_three"

const ulTag : React.FC = () => {
  return (
    <ul>
      <LiTag text={itemOne} />
      <LiTag text={itemTwo} />
      <LiTag text={itemThr} />
    </ul>
  )
}

export default ulTag