
const userdata=(data)=>{
    
    return{
        type:'LOGGEDIN',
        payload:data
    }
}

const logout=()=>{
    return{
        type:'LOGOUT'
        
    }
}



export default {userdata,logout}