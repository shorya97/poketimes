import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
            })
    }
    render(){
            return(
                <div className="container">
                    <h4 className="center">Home</h4>
                    <p>loren</p>
                </div>

        )
    }
}

export default Home