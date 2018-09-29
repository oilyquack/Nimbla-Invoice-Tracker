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
    this.paidChange = this.paidChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      amount: this.props.amount,
      payBy: this.props.payBy,
      customer: this.props.customer,
      services: this.props.services,
      paid: this.props.paid === null ? null : this.props.paid
    });
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

  paidChange(event) {
    this.setState({
      paid: event.target.value.length > 1 ? event.target.value : null
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
      this.props.editReceiver("view");
    }
  }

  render() {
    return (
      <form
        className="app__invoices__display--edit"
        onClick={this.clickHandler}
      >
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
            defaultValue={this.props.payBy}
            id="date-edit"
            type="date"
            onChange={this.payByChange}
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
            maxLength="30"
            value={this.state.services}
          />
        </label>

        <label>
          Paid On:
          <input
            defaultValue={this.props.paid}
            id="paid-on-edit"
            type="date"
            onChange={this.paidChange}
          />
        </label>

        <button name="cancel">Cancel</button>

        <button name="save">Save</button>
      </form>
    );
  }
}

export default EditInvoice;
