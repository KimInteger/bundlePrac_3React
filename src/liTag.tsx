interface content {
  text : string
}

const liTag : React.FC<content> = ({text}) => {
  return (
    <li>{text}</li>
  );
}

export default liTag