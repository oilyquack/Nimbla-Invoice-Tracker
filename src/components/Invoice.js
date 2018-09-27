import React from "react";
import DisplayInvoice from "./DisplayInvoice";
import EditInvoice from "./EditInvoice";

class Invoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "view"
    };

    this.editReceiver = this.editReceiver.bind(this);
  }

  editReceiver(mode) {
    this.setState({
      mode
    });
  }

  render() {
    if (this.state.mode === "view") {
      return (
        <DisplayInvoice
          invoiceId={this.props.invoiceId}
          amount={this.props.amount}
          payBy={this.props.payBy}
          customer={this.props.customer}
          services={this.props.services}
          paid={this.props.paid}
          editReceiver={this.editReceiver}
        />
      );
    } else {
      return (
        <EditInvoice
          invoiceId={this.props.invoiceId}
          amount={this.props.amount}
          payBy={this.props.payBy}
          customer={this.props.customer}
          services={this.props.services}
          paid={this.props.paid}
          editReceiver={this.editReceiver}
          updateReceiver={this.props.updateReceiver}
        />
      );
    }
  }
}

export default Invoice;
