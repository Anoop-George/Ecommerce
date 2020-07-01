

const userdata =(state={user:{}},action)=>{
    switch(action.type){
        case 'LOGGEDIN':return {user:action.payload}
        case 'LOGOUT':return {user:{}}
        default: return state
    }
}


export default userdata