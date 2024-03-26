import React from 'react'
import ReactDOM from 'react-dom'
import YouTube from 'react-youtube';

 const App = (props) => {
  
    console.log(props);

    const reactVersion = require('./package.json').dependencies['react'];
    
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return ([
        
        <h1>
          React
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
        </h1>,

        <p>
          React Version: {reactVersion}
        </p>,        
        
        <YouTube videoId="2g811Eo7K8U" opts={opts}  />        
    ]);
  
}

class Mfe5Element extends HTMLElement {
  
  connectedCallback() {

    console.log('data content:');
    const data = this.getAttribute('data');
    console.log("get attribute");
    console.log(data);

    const props = JSON.parse(data);
    console.log(props);

    ReactDOM.render(<App {...props}/>, this);
  }
}

customElements.define('react-component6601e239be361e17e019bbb5', Mfe5Element);