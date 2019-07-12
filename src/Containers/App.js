import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
//import {robots} from './robots';
import Scroll from '../Components/Scroll';
import './App.css'



class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })

    }

    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

        //console.log(filteredrobots);
    }

    render() {

        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }

        else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.OnSearchChange} />
                    <Scroll>
                    <CardList robots={filteredrobots} />
                    </Scroll>
                </div>
            );
        }


    }
}

export default App;