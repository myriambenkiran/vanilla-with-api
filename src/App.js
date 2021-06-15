//feature 1
import React from "react";
import data from "./data.json";
import Products from "./Components/Products";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      category: "",
      sort: ""
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Vanilla</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar"></div>
          </div>
        </main>
        <footer>
          All right reserved.
        </footer>
      </div>
    );
  }
}

export default App;
