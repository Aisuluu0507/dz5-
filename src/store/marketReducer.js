import products from '../data/product.json';

 const initialState = {
    product: products,
    basket:[]
}

const marketReducer = (state = initialState, action) => {
    switch(action.type){
        case "Add_Products":
            console.log("Adding to basket:", action.payload)
        return{
            ...state,
            basket:[...state.basket, action.payload]
        }
        default:return state
    }
}
export default marketReducer