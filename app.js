import React from 'react'
import ReactDOM from 'react-dom'
import { MathJax, MathJaxContext } from "better-react-mathjax";

const App = ({data, onUpdateData}) => {
  
    const reactVersion = require('./package.json').dependencies['react'];
    
    console.log(data);

    let showDescription = data.component.ui.showDescription;

    // Check if showDescription is null, undefined, an empty string, or 'false'
    if (showDescription === null || showDescription === undefined || showDescription === '' || showDescription === 'false') {
      showDescription = false;
    }

    const config = {
      loader: { load: ["input/asciimath"] },
      asciimath: {
        displaystyle: true,
        delimiters: [
          ["$", "$"],
          ["`", "`"]
        ]
      }
    };

    return (
      <div className="ml-2">

        {showDescription?( <div className="mt-2" dangerouslySetInnerHTML={{ __html: data.component.content.description }} />):<div/>}
        <MathJaxContext config={config}>        
        <MathJax>`{data.component.content.equation}`</MathJax>
        </MathJaxContext>
          
      </div>

    )
  
}

class Mfe5Element extends HTMLElement {
  
  constructor(){
    super();
    this.dataState = null;
  }

  getDataState(){
    return this.dataState;
  }

  setDataState(dataState){
    this.dataState = dataState;
    console.log("react component set DataState:");
    console.log(this.dataState);
  }
  
  connectedCallback() {

    let data = this.getAttribute("data");

    let dataJson = null;
    if(data==null){
      //Test Mode
      dataJson = {
        component:{
          content: {
            equation: "a+b=b+a*sin(A)",
            description:"This is the test description:"
          },
          ui:{
            showDescription: 'true'
          }
        },
        runtime:{
          data:{}
        }
      }
    }
    else{
      dataJson = JSON.parse(data);
    }

    console.log("react component input data");
    console.log(dataJson);

    ReactDOM.render(<App data={dataJson} onUpdateData={this.setDataState}/>, this);
  }


}

customElements.define('react-component660394d5be361e17e019bbb9249bcf98d31e4b51998f6f02cfe95271', Mfe5Element);