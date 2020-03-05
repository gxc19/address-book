import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [],
    currentInput: ""
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

  enterHandler = (event) => {
    if (event.key === 'Enter'){
      this.submit()
    }
  }

  render () {
    return (
      <div className="container">
        <div>
          <h1 className="title">Address Book</h1>
        </div>
        <div className="inputBox">
          <input placeholder="Type Here" type="text" value={this.state.currentInput} onChange={this.addHandler} onKeyPress={this.enterHandler}></input>
          <button onClick={this.submit}>+</button>
        </div>
        <div className="addressBody">
          {this.state.list.map((savedInput, index) => {
            return <p key={index} onClick={() => this.removeHandle(index)}>{savedInput}</p>
          })}
        </div>
      </div>
    )
  }
}

export default App;
