interface ListItem {
  listitem : string[];
}

const UlLi : React.FC<ListItem> = ({listitem}) => {
  return(
    <ul>
      <li>{listitem[0]}</li>
      <li>{listitem[1]}</li>
      <li>{listitem[2]}</li>
    </ul>
  );
}

export default UlLi