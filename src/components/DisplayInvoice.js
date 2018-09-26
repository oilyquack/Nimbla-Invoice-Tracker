import React from "react";

class DisplayInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.editReceiver("edit");
  }

  render() {
    return (
      <div>
        <h2>{this.props.invoiceId}</h2>
        <p>{this.props.amount}</p>
        <p>{this.props.payBy}</p>
        <p>{this.props.customer}</p>
        <p>{this.props.services}</p>
        <button onClick={this.handleClick}>Edit</button>
      </div>
    );
  }
}

export default DisplayInvoice;
