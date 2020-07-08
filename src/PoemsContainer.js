import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          // render poems here
          this.props.displayPoems.map((poem, i) => <Poem key={i} poem={poem} changeStatus={this.props.changeStatus} status={this.props.status}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
