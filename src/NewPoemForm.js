import React from "react";

class NewPoemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      content: "",
      
    }

  }

  handleTitle = event => {
    this.setState({
      title: event.target.value
    })

  }
  handleAuthor = event => {
    this.setState({
      author: event.target.value
    })

  }
  handleContent = event => {
    this.setState({
      content: event.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.postPoem(this.state)
  }
  render() {
    return (
      <form className="new-poem-form" onSubmit = {event => this.handleSubmit(event)}>
        <input placeholder="Title" onChange = {event => this.handleTitle(event)} value={this.state.title}/>
        <input placeholder="Author" onChange = {event => this.handleAuthor(event)}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} onChange = {event => this.handleContent(event)} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
