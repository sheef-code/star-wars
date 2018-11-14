import React, { Component } from 'react';
import Name from './Name';
class Search extends Component {

        constructor(props){
            super(props)

            this.state= {
                name: this.props.initialName
            }
            this.nameChange = this.nameChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            }

            nameChange(event){
                this.setState({
                    name: event.target.value
                })
            }
            
                handleSubmit(event){
                    event.preventDefault()
                  }
        


        render() {
        return (
            <div>

             <form onSubmit={this.handleSubmit} >
             <p>what is your name, pilot?</p>
          <input value={this.state.name}  onChange={this.nameChange} type="text" placeholder="Your Name"/>
          <br/>
          <button>Submit</button>
        </form>

       <Name name={this.state.name} />
      </div>
           
        )
    }
}

export default Search;
