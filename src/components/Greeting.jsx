import React, { Component } from "react";

export default class Greeting extends Component {
    constructor(props){
        super(props);
        
        this.setType = this.setType.bind(this);
    }

    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType(e){
        this.setState({ type: e.target.value });
    }

    setName(e){
        this.setState({ name: e.target.value });
    }

    render() {
        //this.props is read only property
        const { type, name } = this.state;

        return (
            <div>
                <h1>{type} {name}!</h1>
                <hr/>
                <input type="text" placeholder="Type..." value={type} onChange={this.setType} />
                <input type="text" placeholder="Name..." value={name} onChange={e => this.setName(e)} />
            </div>
        );
    }
}