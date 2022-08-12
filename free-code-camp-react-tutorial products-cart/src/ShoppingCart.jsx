import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
      { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
      { id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0 },
      { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
      { id: 5, productName: "XBox", price: 7780, quantity: 0 },
      { id: 6, productName: "Dell Monitor", price: 880, quantity: 0 },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        {" "}
        {/*this is the code for the shopping cart component*/}
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-outline-info">Buy Now</button>
              </Product>
            );
          })}{" "}
          {/*parent will give child component the above handle methods to handle the increment and decrement events in the child component; parent can supply both props and content to 
          the child.*/}
        </div>
      </div>
    );
  } //render ends here

  //executes when the user clicks on + button
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    //update the state of current component(parent component)
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++; /*increase quantity onClick */
      this.setState({
        products: allProducts,
      }); /*setting state allows for updating the state of the quantity */
    }
  };

  //executes when user clicks on - button
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    //update the state of current component(parent component)

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--; /*decrease quantity onClick */
      this.setState({ products: allProducts });
    }
  };

  // executes when the user clicks on Delete(X) button in Product component
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete this product?")) {
      //delete product based on index
      allProducts.splice(index, 1); /*1 element will be removed in the products array */
      //update the state of current component(parent component)
      this.setState({ products: allProducts });
    }
  };
} /*pass as props for each element in the array, the arrow function will be

/*spread operator gets all elements fro the particular 
array             executed; it produces a new instance of product; each 
            element is received as a (prod) argument; here we 
            invoke the product component inside the shopping cart 
            component. The invoked component is the child of the 
            component that invokes it. Product is child of 
            ShoppingCart*/
/*key is internally used by React and the DOM no loger 
            has access to the key to print out. This is the reason 
            for adding the id */
/*all properties passed from parent to child are stored 
            in the object literal: props; props refers to all the 
            properties passed from parent to child*/
