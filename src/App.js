//feature 1
import React from "react";
import data from "./data.json";
import Products from "./Components/Products";
import Filter from "./Components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      brand: "",
      sort: ""
    }
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: state.products.slice().sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
              ? 1
              : -1
      ),
    }));
  }

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({
        [event.target.name]: event.target.value,
        products: data.products
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        products: data.products.filter(p => p[event.target.name] === event.target.value)
      })
    };
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
              <Filter count={this.state.products.length}
                brand={this.state.brand}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
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
