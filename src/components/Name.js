import React, { Component } from 'react';

class Name extends Component {

    constructor(props){
        super(props)
      }


    render() {
        return (
            <div>
                <h1 style={{fontSize: 20}}> {this.props.name} </h1>
            </div>
        );
    }
}

export default Name;
