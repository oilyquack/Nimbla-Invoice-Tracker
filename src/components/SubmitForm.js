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
      amount: this.state.amount,
      payBy: this.state.payBy,
      customer: this.state.customer,
      services: this.state.services
    };

    this.props.receiver(invoice);
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
        />

        <label>Pay By:</label>
        <input
          id="date-input"
          placeholder="Date"
          type="date"
          onChange={this.payByChange}
        />

        <label>Customer:</label>
        <input
          id="customer-input"
          placeholder="Customer"
          type="text"
          onChange={this.customerChange}
        />

        <label>Services:</label>
        <textarea
          id="services-input"
          placeholder="Services"
          type="text"
          onChange={this.servicesChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SubmitForm;
