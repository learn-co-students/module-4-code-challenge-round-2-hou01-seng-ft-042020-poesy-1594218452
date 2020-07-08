import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     poems: [],
      
  //   }

  // }

  // componentDidMount() {
  //   fetch("http://localhost:6001/poems/")
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         poems: data
  //       }))
  // }

  // postPoem(poemObj) {
  //   const newPoem = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(poemObj)
  //   }
  //   fetch("http://localhost:6001/transactions/", newPoem)
  // }
  render() {
    return (
      <div className="poems-container">
        {
        this.props.poems.map(poem => (<Poem poem={poem} key={poem.id}/>))  // render poems here
        }
      </div>
    );
  }
}

export default PoemsContainer;
