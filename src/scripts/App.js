import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import {CardList, SearchField, Scroll, SearchType} from './Components';
import '../style/App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchvalue:'',
            searchtype:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots:users}))
    }

    onSearchChange =(event)=> {
        this.setState({searchvalue: event.target.value});
    }

    onTypeChange =(event)=> {
        this.setState({searchtype: event.target.value})
    }

    render(){
        const {robots, searchvalue, searchtype} = this.state;
        const {onSearchChange, onTypeChange} = this;

        if(!robots){
            return <h1>Loading...</h1>
        } else {
            const filterRobots = robots.filter(
                (robot)=>{
                if(searchtype === 'name'){
                    return robot.name.toLowerCase().includes(searchvalue)
                } else if(searchtype === 'email'){
                    return robot.email.toLowerCase().includes(searchvalue)
                } return robot;         
            }
            )
    
            return(
                <div className='tc'>
                    <header>
                        <h1 className='f1 grow'>Robot Friends</h1>
                        <SearchType select={onTypeChange}/>
                        <SearchField search={onSearchChange}/>
                    </header>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots}/>  
                        </ErrorBoundary>
                    </Scroll>
                    <footer>&copy; nebnnamdi</footer>
                </div>
            )
        }
        }
    
}

export default App;