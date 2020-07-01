
const initialState={
items:[]
}

const cart =(state=initialState,action)=>{
    switch(action.type){
        case 'ADDTOCART':{
            if(state.items.includes(action.payload)== false){return {items:[...state.items,action.payload]}}
            else{
                let index = state.items.indexOf(action.payload)
                action.payload["quantity"]+=1;
                return {items:[...state.items.slice(0,index),action.payload]}
             }
            };
       
        case 'UPDATECART':{
           
            const index = state.items.findIndex(item => item.id === action.payload.id);
                
              if (index >= 0) {
                state.items[index] = {
                  id: action.payload.id,
                  name:action.payload.name,
                  price:action.payload.price,
                  image:action.payload.image,
                  importance:action.payload.importance,
                  data:action.payload.data,
                  quantity: action.payload.quantity+1
                };
                return {
                    items: [...state.items] // creating new array
                  };
        }   
    } 

    case 'REMOVEFROMCART':{
        
        const index = state.items.findIndex(item => item.id === action.payload.id);
                
        if (index >= 0) {
          state.items[index] = {
            id: action.payload.id,
            name:action.payload.name,
            price:action.payload.price,
            image:action.payload.image,
            importance:action.payload.importance,
            data:action.payload.data,
            quantity: action.payload.quantity-1
          };
          return {
              items: [...state.items] // creating new array
            };
        }  
    };

    case 'DELETE':{
        //let index = state.items.indexOf(action.payload)
        
        return {items:[...state.items.filter(item=>item.id != action.payload.id)]}
    };

    case 'REMOVEALL':{
      return {...state,items:[]}
    }

        default: return state
    }
}

export default cart