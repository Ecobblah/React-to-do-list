import React, {Component} from "react";

class AddItem extends Component{
    state={
        item: '',
        id: null
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.item!==''){
            this.props.handleAdd(this.state);
        }
        this.setState({
            item: '',
            id: null
        })
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value,
            id: this.props.numItems
        })
    }

    render(){
        return(
            <div id="inputForm" className="container">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <label className="text-secondary" htmlFor="userInput">Add new todo: </label>
                    <input className="form-control"id="userInput"onChange={this.handleChange} type="text" value={this.state.item}/>
                </form>
            </div>  
        )
    }
}

export default AddItem;