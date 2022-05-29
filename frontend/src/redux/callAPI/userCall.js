import {
    loginSlice,
    registerSlice
} from '../Slice/userSlice'
import {publicRequest} from '../requestMethods'

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch(loginSlice.actions.loginRequest);

        const config = { headers: { "Content-Type": "application/json" } }; 

        const {data} = await publicRequest.post(
            `/login`,
            {email, password},
            config,
        )
        dispatch(loginSlice.actions.loginSuccess(data.user));
    }catch(err){
        dispatch(loginSlice.actions.loginFailure(err.response.data.message));
    }
}

export const register = (name,email,password) => async (dispatch) => {
    try{
        dispatch(registerSlice.actions.registerRequest());
        const config =  { headers: { "Content-Type": "application/json" } }; 

        const { data } = await publicRequest.post(
            `/register`, 
            {name,email,password}, 
            config
        );
        dispatch(registerSlice.actions.registerSuccess(data.user))
    }catch(err){    
        dispatch(registerSlice.actions.registerFailure(err.response.data.message))
    }
}

