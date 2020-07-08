import React from "react";

class Poem extends React.Component {
  state = {
    readStatus: false
  }
  render() {console.log(this.props)
    return (
      <div>
        <h3>{this.props.sinPoem.title}</h3>
        <p>{this.props.sinPoem.content}</p>
        <p>
        <strong>-{this.props.sinPoem.author}</strong>
        </p>
        <button onClick={() => this.setState({readStatus: !this.state.readStatus})}>{!this.state.readStatus? 'Mark as Read' : 'Mark as Unread'}</button>
      </div>
    );
  }
}

export default Poem;
