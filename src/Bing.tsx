import React from 'react';

interface BingProperties {
  h1TextNode : string;
  styles : React.CSSProperties
}

const Bing : React.FC<BingProperties> = ({h1TextNode, styles}) => {
  
  return (
    <div>
      <h1 style={styles}>{h1TextNode}</h1>
    </div>
  );
}

export default Bing