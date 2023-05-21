import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  state = {
    items: [],
  };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;

    let existingItem = this.state.items.find(item => item.name === name);
    if(existingItem) {
        existingItem.amount++;
    } else {
        currentItems.push({
          amount,
          name,
          price,
        });
    }

    this.setState({ items: currentItems });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="main-container">
          <h3>Gemüse</h3>
          <div className="vegetables">
            <Product
              onAdd={() => this.addItem(1, "Tomaten", 2.99)}
              img="assets/img/tomatoes.jpg"
              title="Tomaten"
            />
            <Product
              onAdd={() => this.addItem(1, "Karotten", 3.99)}
              img="assets/img/carrots.jpg"
              title="Karotten"
            />
            <Product
              onAdd={() => this.addItem(1, "Paprika", 3.49)}
              img="assets/img/pepper.jpg"
              title="Paprika"
            />
          </div>
          <h3>Obst</h3>
          <div className="fruits">
            <Product
              onAdd={() => this.addItem(1, "Birnen", 4.49)}
              img="assets/img/pears.jpg"
              title="Birnen"
            />
            <Product
              onAdd={() => this.addItem(1, "Erdbeeren", 5.49)}
              img="assets/img/strawberry.jpg"
              title="Erdbeeren"
            />
            <Product
              onAdd={() => this.addItem(1, "Blaubeeren", 4.99)}
              img="assets/img/blueberries.jpg"
              title="Blaubeeren"
            />
          </div>
          <ShoppingCart items={this.state.items} />
        </div>
      </>
    );
  }
}

export default App;
