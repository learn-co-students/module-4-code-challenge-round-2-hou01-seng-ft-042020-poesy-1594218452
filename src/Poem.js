import React from "react";

class Poem extends React.Component {

  state ={
    poemRead: false
  }

  handleRead = () => {
    this.props.readPoem(this.props.poem)
  }
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
    <p>{this.props.poem.content}</p>
        <p>
    <strong>{this.props.poem.author}</strong>
        </p>
        <button onClick={this.handleRead}>Read</button>
      </div>
    );
  }
}

export default Poem;
