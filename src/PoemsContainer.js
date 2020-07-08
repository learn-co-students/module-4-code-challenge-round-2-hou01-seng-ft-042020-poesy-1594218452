import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
        this.props.displaypoems.map(poem => <Poem poem={poem}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
