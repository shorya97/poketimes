const initState = {
    posts: [
        {id:'1', title: 'Monday', body: 'hahahahahahhabeubfiueulfbuebfu'},
        {id:'2', title: 'Friday', body: 'hahajhduiheugfhhabeubfiueulfbuebfu'},
        {id:'3', title: 'Sunday', body: 'hahahahahiuddgvygfyedvycileubfiueulfbuebfu'},
    ]
}

const rootReducer = (state = initState, action) =>{
    if (action.type === 'DELETE_POST'){
         let newPosts = state.posts.filter(post => {
             return action.id !== post.id
         })
    }
    return state;
}

export default rootReducer