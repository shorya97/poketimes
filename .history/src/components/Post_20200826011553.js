import React,{Component} from 'react';
import axios from 'axios';

class Post extends Component{
    state = {
        id:null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        this.setState({
            id
        })

    }
    render(){
        return(
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

export default Post