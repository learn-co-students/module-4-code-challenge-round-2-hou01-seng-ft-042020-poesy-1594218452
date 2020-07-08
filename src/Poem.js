import React from "react";

class Poem extends React.Component {
  state={
    buttonText: "Mark as read"
  }

  handleClick = () => {
    if(this.state.buttonText == "Mark as read"){
    this.setState({
      buttonText: "Mark as unread"
    })
  }else{
    this.setState({
      buttonText: "Mark as read"
  })
  }
}
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default Poem;
