import React, { Component } from "react";

export default class CustomersList extends Component {
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
    if (custName.startsWith("S")) return "green-highlight border-left";
    else if(custName.startsWith("J")) return "red-highlight border-right";
    else return "orange-highlight border-left";
  };/*Css Styles set dynamically with state property is good for one or 
  two properties; but not good when using the same styles for multiple elements, 
  or when setting multiple css properties at the same time. For changes to 
  multiple elements of properties, it's better to use css classNames rather than 
  style attributes; above is the example of the css className attribute*/
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
    return this.state.customers.map((cust, index) => {{/*the 
  cust argument represents the object from the array, and index 
represents the index of the corresponding element */}
      return ( 
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer"/>
            <div>
              <button className="btn btn-sm btn-secondary" onClick={() => {this.
              onChangePictureClick(cust, index);}}>Change Picture</button> {/*call the method and pass arguments in the onClick property
              customer argument in map method is being passed to this method  */}
            </div>
            </td>
            <td className={this.customerNameStyle(cust.name)}>{cust.name}
            </td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      ); /*the map function allows for building the 
        table rows with the table data */
    });
  };

  //Executes when the user clicks in "Change Picture" button in the grid
  //receives the "customer" object and index on the currently clicked customes
  onChangePictureClick =(cust, index) =>{{/*here we are receiving the value into the onChange
  PictureClick method */}
  //console.log(cust);
  //console.log(index);

  //get existing customers
  var custArr = this.state.customers;
  custArr[index].photo="https://picsum.photos/id/1010/60";

// update "customers" array int he state
  this.setState({customers:custArr}); {/*this is hos you update the state of an arr using 
the setState method; this changes the photo images of each photo */}
  }
} /*arrow function makes it so "this will not change to 
  something else" */
