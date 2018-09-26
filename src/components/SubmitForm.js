import React from "react";

class SubmitForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="app__form">
        <label>Amount:</label>
        <input id="amount-input" placeholder="£" type="number" />

        <label>Pay By:</label>
        <input id="date-input" placeholder="Date" type="date" />

        <label>Customer:</label>
        <input id="customer-input" placeholder="Customer" type="text" />

        <label>Services:</label>
        <textarea id="services-input" placeholder="Services" type="text" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SubmitForm;
