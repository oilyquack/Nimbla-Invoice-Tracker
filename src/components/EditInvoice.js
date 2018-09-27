import React from "react";

class EditInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      payBy: "",
      customer: "",
      services: ""
    };
    this.amountChange = this.amountChange.bind(this);
    this.payByChange = this.payByChange.bind(this);
    this.customerChange = this.customerChange.bind(this);
    this.servicesChange = this.servicesChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  amountChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  payByChange(event) {
    this.setState({
      payBy: event.target.value
    });
  }

  customerChange(event) {
    this.setState({
      customer: event.target.value
    });
  }

  servicesChange(event) {
    this.setState({
      services: event.target.value
    });
  }

  clickHandler(event) {
    if (event.target.name === "save") {
      const invoice = {
        id: this.props.invoiceId,
        amount: this.state.amount,
        payBy: this.state.payBy,
        customer: this.state.customer,
        services: this.state.services
      };

      this.props.updateReceiver(invoice);

      this.props.editReceiver("view");
    }
    if (event.target.name === "cancel") {
      console.log("The invoice hasn't changed");

      this.props.editReceiver("view");
    }
  }

  render() {
    return (
      <form onClick={this.clickHandler}>
        <label>Amount:</label>
        <input
          id="amount-edit"
          placeholder={this.props.amount}
          type="number"
          onChange={this.amountChange}
          value={this.state.amount}
        />

        <label>Pay By:</label>
        <input
          id="date-edit"
          placeholder={this.props.payBy}
          type="date"
          onChange={this.payByChange}
          value={this.state.payBy}
        />

        <label>Customer:</label>
        <input
          id="customer-edit"
          placeholder={this.props.customer}
          type="text"
          onChange={this.customerChange}
          value={this.state.customer}
        />

        <label>Services:</label>
        <textarea
          id="services-edit"
          placeholder={this.props.services}
          type="text"
          onChange={this.servicesChange}
          value={this.state.services}
        />

        <button name="cancel">Cancel</button>

        <button name="save">Save</button>
      </form>
    );
  }
}

export default EditInvoice;
