import React from "react";

class EditInvoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      payBy: "",
      customer: "",
      services: "",
      paid: null
    };
    this.amountChange = this.amountChange.bind(this);
    this.payByChange = this.payByChange.bind(this);
    this.customerChange = this.customerChange.bind(this);
    this.servicesChange = this.servicesChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({
      paid: event.target.value
    });
  }

  clickHandler(event) {
    if (event.target.name === "save") {
      const invoice = {
        id: this.props.invoiceId,
        amount: this.state.amount,
        payBy: this.state.payBy,
        customer: this.state.customer,
        services: this.state.services,
        paid: this.state.paid
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
        <label>
          Amount:
          <input
            id="amount-edit"
            placeholder={this.props.amount}
            type="number"
            onChange={this.amountChange}
            value={this.state.amount}
          />
        </label>

        <label>
          Pay By:
          <input
            id="date-edit"
            placeholder={this.props.payBy}
            type="date"
            onChange={this.payByChange}
            value={this.state.payBy}
          />
        </label>

        <label>
          Customer:
          <input
            id="customer-edit"
            placeholder={this.props.customer}
            type="text"
            onChange={this.customerChange}
            value={this.state.customer}
          />
        </label>

        <label>
          Services:
          <textarea
            id="services-edit"
            placeholder={this.props.services}
            type="text"
            onChange={this.servicesChange}
            value={this.state.services}
          />
        </label>

        <label>
          Paid:
          <select onChange={this.handleChange}>
            <option value="true">Paid</option>
            <option value="false">Unpaid</option>
          </select>
        </label>

        <button name="cancel">Cancel</button>

        <button name="save">Save</button>
      </form>
    );
  }
}

export default EditInvoice;
