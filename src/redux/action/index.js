// For Add Item to Cart
export const addCart = (product) => {
    return{
        
        type : "ADDITEM",
        payload : product 
    }
} 
// 3;
// function creator 
// function ب return action
// dispatch({
//     type : "ADDITEM",
//         payload : product
// })
// كأنه كده بالظبط
 

// For Delete Item From Cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}
