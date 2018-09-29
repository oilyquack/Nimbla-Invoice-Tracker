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
      <div className="app__invoices__display--read">
        <label>Invoice #{this.props.invoiceId}</label>
        <p>
          <span className="display-title">Amount:</span> £{this.props.amount}
        </p>
        <p>
          <span className="display-title">Pay By:</span> {this.props.payBy}
        </p>
        <p>
          <span className="display-title">Customer:</span> {this.props.customer}
        </p>
        <p>
          <span className="display-title">Services:</span> {this.props.services}
        </p>
        <span className="display-title">
          {this.props.paid != null ? `PAID ON ${this.props.paid}` : "UNPAID"}
        </span>
        <button onClick={this.handleClick}>Edit</button>
      </div>
    );
  }
}

export default DisplayInvoice;
