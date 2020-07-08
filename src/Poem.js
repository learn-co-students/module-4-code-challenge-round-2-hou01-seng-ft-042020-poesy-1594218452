import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.author}</strong>
        </p>
        {this.props.status ?
    <button onClick={this.props.changeStatus}>Mark as read</button> : <button onClick={this.props.changeStatus}>Mark as unread</button>}
      </div>
    );
  }
}

export default Poem;
