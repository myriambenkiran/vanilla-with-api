import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} products </div>
                <div className="filter-sprt">
                    Sort{" "}
                    <select name="sort" value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest price</option>
                        <option value="highest">Highest price</option>
                    </select>
                </div>
                <div className="filter-brand">
                    Filter{" "}
                    <select name="brand" value={this.props.brand} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="Avene">Avene</option>
                        <option value="La Roche-Posay">La Roche-Posay</option>
                        <option value="Embryolisse">Embryolisse</option>
                        <option value="REN">REN</option>
                        <option value="Ole Henriksen">Ole Henriksen</option>
                    </select>
                </div>
            </div>
        )
    }
}
