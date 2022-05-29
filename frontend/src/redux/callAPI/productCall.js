
import {publicRequest} from '../requestMethods'

import {productSlice, productsSlide} from '../Slice/productSlice'

//get all products
export const getProduct = (keyword = "", currentPage = 1, price = [0, 10000000], category) => async (dispatch) => {
    try{
        dispatch(productsSlide.actions.allProductsRequest);

        let link = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

        // if (category) {
        //     link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
        // }

        const { data } = await publicRequest.get(link);
        
        dispatch(productsSlide.actions.allProductsSuccess(data));
    }catch(err){
        dispatch(productsSlide.actions.allProductsFailure(err.response.data.message));
    }
}


// get  product detail
export const getProductDetail = (id) => async(dispatch) =>{
    try{
        dispatch(productSlice.actions.productDetailsRequest());

        const { data } = await publicRequest.get(
            `/product/${id}`
        );
        
        dispatch(productSlice.actions.productDetailsSuccess(data.product));
    }catch(err){
        dispatch(productSlice.actions.productDetailsFailure(err.response.data.message));
    }   
}

// export const clearErr = () => async (dispatch)=>{
//     dispatch(clearError())
// }