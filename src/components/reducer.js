import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, GET_ROOMS_START, GET_ROOMS_SUCCESS, GET_ROOMS_FAIL
}  from './actions/index';


const initialState = {
    id: localStorage.getItem('user') || null,
    isLoading: false,
    error: null,
    rooms: {},
    score: 0

}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case REGISTER_START:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        case REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                id: null
            }
        case GET_ROOMS_START: {
            return {
                ...state,
                isLoading:true,
                error:""
            }
        }
        case GET_ROOMS_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                rooms:{...state.rooms, ...action.payload},
            }
        }
        case GET_ROOMS_FAIL: {
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        }
    default:
        return state;                         
    }
}

export default reducer;
