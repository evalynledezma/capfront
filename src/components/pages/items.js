import React, { Component } from "react";

export default class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: true,
      error: false,
    };
  }

  //add endpoint to API
  componentDidMount() {
    fetch("add API link here")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  renderItems() {
    const itemsHTML = this.state.items.map((item) => {
      return (
        <div className="item-wrapper">
          <h3 className="title"> {item.name}</h3>
          <p className="description">${item.price / toFixed(2)}</p>
        </div>
      );
    });

    return itemsHTML;
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}
