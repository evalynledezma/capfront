import React, { Component } from "react";

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInput: "",
      priceInput: "",
      loading: false,
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true,
      error: false,
    });

    // get endpoint to put in fetch parentesis with eidan!!!
    fetch("LINK FOR API HERE", {
      methos: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: this.state.nameInput,
        price: parseFloat(this.state.priceInput),
      }),
    })
      .then((response) => response / json())
      .then((data) => {
        if (data.id) {
          this.props.history.push("/items");
        }
      })
      .catch((error) => {
        console.log("Error adding your item", error);

        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  render() {
    return (
      <div className="add-item-wrapper">
        <h1>Add an Item</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="nameInput"
            value={this / state / nameInput}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="name"
            name="priceInput"
            value={this / state / priceInput}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>

        {this.state.loading ? (
          <div className="loading">Submitting...</div>
        ) : null}
        {this.state.error ? (
          <div className="error">
            An error has occured, please try the request again.
          </div>
        ) : null}
      </div>
    );
  }
}
