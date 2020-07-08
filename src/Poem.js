import React from "react";

class Poem extends React.Component {

  state={
    read: true
  }

  handleClick = () => {
    console.log("TEST", this.state.show)
    let newStatus = !this.state.read
    this.setState({
      read: newStatus
    })
  }


  render() {
    console.log("POEM", this.props.poem)
    const {title, content, author, id} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>{author}</strong>
        </p>
    <button onClick={this.handleClick}>{this.state.read ? 'Mark as read':'Mark as unread'}</button>
    <button onClick={() => this.props.deletePome(id)}>Delete Pome</button>
      </div>
    );
  }
}

export default Poem;
