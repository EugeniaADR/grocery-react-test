import { Component } from "react";
import iconCheck from "./iconCheck.png";

export class GroceryList extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      groceryList: [],
    };
  }

  onChangeEvent(e) {
    this.setState({ userInput: e }); // change what user Inputs
  }

  addItem(input) {
    if (input === "") {
      alert("Please add an item");
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({ groceryList: listArray, userInput: "" }); 
    }
  }

  crossedItem(event) {
    const crossItem = event.target;
    crossItem.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({ groceryList: listArray });
    }
    
    onFormSubmit(e) {
        e.preventDefault()
    }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="container">
          <input
            type="text"
            placeholder="Start typing..."
            onChange={(e) => {
              this.onChangeEvent(e.target.value);
            }}
            value={this.state.userInput}
          />
        </div>
        <div className="container">
          <button
            onClick={() => this.addItem(this.state.userInput)}
            className="add"
          >
            Add
          </button>
        </div>
        <ul>
          {this.state.groceryList.map(
            (
              item,
              index // get access to list with the map we get acess to each item in the list
            ) => (
              <li onClick={this.crossedItem} key={index}>
                <img src={iconCheck} alt='checkMark' />
                {item}
              </li>
            )
          )}
        </ul>
        <div className="container">
          <button onClick={() => this.deleteItem()} className="btnDelete">
            Delete
          </button>
        </div>
      </form>
    );
  }
}
