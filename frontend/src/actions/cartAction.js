const add =(item)=>{
    return {
        type:'ADDTOCART',
        payload:item
    }
}

const remove=(item)=>{
    return {
        type:'DELETE',
        payload:item
    }
}

const increment=(product)=>{
    return {
        type:'UPDATECART',
        payload:product
    }
}

const decrement=(product)=>{
    return {
        type:'REMOVEFROMCART',
        payload:product
    }
}

const removeall=()=>{
    return{
        type:'REMOVEALL'
    }
}

export default {add,remove,increment,decrement,removeall}