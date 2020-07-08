import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  
  render() {
    if(this.props.poems == null){
      return<h1>helo</h1>
    }
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poem => {
            return(<Poem poem={poem} readPoem={this.props.readPoem}/>)
          })
          // render poems here
        }
      </div>
    );
  }
}

export default PoemsContainer;
