import React, { Component } from 'react';

class Vehicles extends Component {
    constructor(props){
        super(props)
        this.state ={
            vehicles: []
        }
    }
    
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/' + 'http://swapi.co/api/vehicles/')
        .then(res => res.json())
        .then( data => {
            console.log(data.results)
            this.setState({
                vehicles: data.results  
            })
        })
    }



    render() {
        return (
            <div className = "card-cont">
                
                {this.state.vehicles.map( (vehicle)=> {
                    
                    return  <div className="card" key={vehicle.url} >
                    <h2> Vehicle: {vehicle.name} </h2>
                    <h4> Model:{vehicle.model} </h4>
                    <ul className="list-group list-group-flush">
                     <li className="list-group-item">Specs</li>
                     <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                     <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                     <li className="list-group-item">Passenger: {vehicle.passengers}</li>
                     <li className="list-group-item">Length: {vehicle.length}</li>
                     <li className="list-group-item">Crew: {vehicle.crew}</li>
                     <li className="list-group-item">Speed: {vehicle.max_atmosphering_speed}</li>
                     <li className="list-group-item">Capacity: {vehicle.cargo_capacity}</li>
                    </ul>
                    </div>



                })}


                
            </div>
        );
    }
}

export default Vehicles;
