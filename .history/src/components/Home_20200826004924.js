import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(1,10)
                })

            })
    }
    render(){
        const { posts } = this.state;
        const postList = posts.length ? () : (
            <div className="center">No posts yet</div>
        )
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <p>loren</p>
            </div>

        )
    }
}

export default Home