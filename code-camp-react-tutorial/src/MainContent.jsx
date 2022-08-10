import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Jones",
        phone: "982-014",
        address: { city: "New Jersey" },
        photo: "https://picsum.photos/id/1014/60",
      },
      { id: 3, 
        name: "Allen", 
        phone: "889-921", 
        address: { city: "London" },
        photo: "https://picsum.photos/id/1011/60",
    },
      { id: 4, 
        name: "James", 
        phone: null, 
        address: { city: "Berlin" },
        photo: "https://picsum.photos/id/1012/60",
    },
      { id: 5, 
        name: "John", 
        phone: null, 
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1013/60", 
    },
    ] /*each person is presented as an 
    object literal*/,
  }; /*object literal: cotains properties
  and the properties can be any type*/

  customerNameStyle = (custName) => {
    if (custName.startsWith("S")) return {backgroundColor:"green"};
    else if(custName.startsWith("J")) return {backgroundColor: "red"};
    else return {backgroundColor:"orange"};
  };/*Css Styles set dynamically with state property is good for one or 
  two properties; but not good when using the same styles for multiple elements, 
  or when setting multiple css properties at the same time. For changes to 
  multiple elements of properties, it's better to use css classNames rather than 
  style attributes*/
  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  } /*rendering an expression above */
  /*Executes when the user clicks on Refresh button */
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    }); /*updates browser dom only for this property */
  };

  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      /*conditional rendering: if/else; you can write this in a function and
      invoke in the putput area above  */
      <div className="bg-warning p-2 text-center">No Phone</div>
    );
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer"/></td>
            <td style={this.customerNameStyle(cust.name)}>{cust.name}
            </td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      ); /*the map function allows for building the 
        table rows with the table data */
    });
  };
} /*arrow function makes it so "this will not change to 
  something else" */
