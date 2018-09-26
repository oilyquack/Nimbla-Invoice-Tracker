import React from "react";

class EditInvoice extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.editReceiver("view");
  }

  render() {
    return (
      <form>
        <h2>EDIT MODE</h2>
        <button onClick={this.handleClick}>Save</button>
      </form>
    );
  }
}

export default EditInvoice;
