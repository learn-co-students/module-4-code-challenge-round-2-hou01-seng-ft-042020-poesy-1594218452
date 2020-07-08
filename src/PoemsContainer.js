import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
 
  render() {
    console.log("inside poems container:", this.props.poems)
    
    return (
      <div className="poems-container">
        { this.props.poems.map(poem => {
            return (
              <Poem {...poem} />
            )
          })
        }
      </div>
    );
  }
}

export default PoemsContainer;
