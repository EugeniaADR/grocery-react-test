import { Component } from "react";

export class GroceryList extends Component{
    constructor() {
        super();

        this.state = {
            userInput: "",
            groceryList: []

        }
    }

    onChangeEvent(e) {
        this.setState({ userInput: e }) // change what user Inputs
    }

    addItem(input) {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''}) // to empty input
    
    }

    crossedItem(event) {
        const li = event.targer; // adds listener
        li.classList.toggle('crossed') // toggle adds class if it's not exists and deletes if it does
    }
        render() {
            return (
                <div>
                <div>
                    <input type="text"
                        placeholder="Start typing..."
                        onChange={(e) => { this.onChangeEvent(e.target.value) }}
                        value={this.state.userInput } />
                    </div>
                    <div>
                        <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => ( // get access to list with the map we get acess to each item in the list
                            <li onClick={this.crossedItem} key={index}>{item}</li>
                        ))}
                    </ul>

                </div>

            )
        }
    }

