import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [],
    currentInput: " "
  }

  addHandler = e => {
    this.setState({ currentInput: e.target.value })
    
  }

  submit = () => {
    let storeInput = this.state.list

    if(this.state.currentInput === ""){
      return alert("Please Type In The Space Below")
    }
    storeInput.push(this.state.currentInput)
    this.setState({input: storeInput, currentInput: ""})
    console.log("Hi o/")
  }

  removeHandle = index => {
    let storeList = this.state.list
    storeList.splice(index, 1)
    this.setState({ list: storeList})
  }

  render () {
    return (
      <div className="container">
        <div className="addressBody">
          <button onClick={this.submit}>+</button>
        <input type="text" value={this.state.currentInput} onChange={this.addHandler}></input>
        {this.state.list.map((savedInput, index) => {
          return <p key={index}>{savedInput} onClick={() => this.removeHandle(index)}</p>
        })}
        </div>
      </div>
    )
  }
}

export default App;
