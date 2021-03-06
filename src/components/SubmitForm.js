import React from "react";

class SubmitForm extends React.Component {
  constructor() {
    super();

    this.state = {
      amount: "",
      payBy: "",
      customer: "",
      services: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.amountChange = this.amountChange.bind(this);
    this.payByChange = this.payByChange.bind(this);
    this.customerChange = this.customerChange.bind(this);
    this.servicesChange = this.servicesChange.bind(this);
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

  submitHandler(event) {
    event.preventDefault();

    const invoice = {
      id: this.props.invoiceID,
      amount: this.state.amount,
      payBy: this.state.payBy,
      customer: this.state.customer,
      services: this.state.services,
      paid: null
    };

    this.props.invoiceReceiver(invoice);

    this.setState({
      amount: "",
      payBy: "",
      customer: "",
      services: ""
    });
  }

  render() {
    return (
      <form className="app__form" onSubmit={this.submitHandler}>
        <label>Amount:</label>
        <input
          id="amount-input"
          placeholder="£"
          type="number"
          onChange={this.amountChange}
          value={this.state.amount}
          required
        />

        <label>Pay By:</label>
        <input
          id="date-input"
          placeholder="Date"
          type="date"
          onChange={this.payByChange}
          value={this.state.payBy}
          required
        />

        <label>Customer:</label>
        <input
          id="customer-input"
          placeholder="Customer"
          type="text"
          onChange={this.customerChange}
          value={this.state.customer}
          required
        />

        <label>Services:</label>
        <textarea
          id="services-input"
          placeholder="Services"
          type="text"
          rows="5"
          onChange={this.servicesChange}
          value={this.state.services}
          maxLength="30"
          required
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SubmitForm;
