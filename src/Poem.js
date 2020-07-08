import React from "react";

class Poem extends React.Component {
  state = {
    read: "Mark as read"
  }

  markRead = () => {
    (this.state.read === "Mark as read")? 
    this.setState({
      read: "Mark as unread"
    })
    : this.setState({
      read: "Mark as read"
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- By Author: {this.props.author}</strong>
        </p>
        <button onClick={()=>this.markRead()} >{this.state.read}</button>
      </div>
    );
  }
}

export default Poem;
