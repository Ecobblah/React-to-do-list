import React, { Component } from 'react';
import Logo from './Logo';
import Items from './Items';
import AddItem from "./AddItem";

class App extends Component {
  
  state={
    userList:[],
    numItems: 0
  }
  
  // Delete
  handleDelete = (i) => {
    // removed the selected item i from array
    const userListArray = this.state.userList.filter(x=>{
      return x.id !== i;
    })
    
    // update state
    this.setState({
      userList: userListArray
    })
  }
  
  // Add
  handleAdd = (i) => {
    // duplicate array and insert i to it
    const userListArray = [...this.state.userList,i]
    
    // update state
    this.setState({
      userList: userListArray,
      numItems: this.state.numItems+1
    })
  }
  
  render() {
    return (
      <div className="App">
        <Logo />
        <Items items = {this.state.userList} deleteItems = {this.handleDelete}/>
        <AddItem handleAdd = {this.handleAdd} numItems = {this.state.numItems}/>
      </div>
    );
  }
}

export default App;
