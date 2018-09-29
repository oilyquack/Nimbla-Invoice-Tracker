import React from "react";
import cx from "classnames";

class DisplayInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overdue: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    const due = new Date(this.props.payBy);
    if (due < today) {
      this.setState({
        overdue: true
      });
    }
  }

  handleClick(event) {
    event.preventDefault();

    this.props.editReceiver("edit");
  }

  render() {
    const classes = cx("app__invoices__display--read", {
      overdue: this.state.overdue,
      paid: this.props.paid !== null
    });
    return (
      <div className={classes}>
        <label>Invoice {this.props.invoiceId}</label>
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
