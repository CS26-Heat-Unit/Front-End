import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, GET_ROOMS_START, GET_ROOMS_SUCCESS, GET_ROOMS_FAIL,UPDATE_USER_START, UPDATE_USER_FAIL, UPDATE_USER_SUCCESS
}  from './actions/index';
import {addSpice} from '../utils/spiceRange'

const initialState = {
    id: localStorage.getItem('user') || null,
    isLoading: false,
    error: null,
    rooms: {},
    score: 0,
    currentRoom: 0, //current room id for the user
    currentTitle:"",
    currentDescription: ""
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
            addSpice(action.payload.data)

            return {
                ...state,
                isLoading: false,
                rooms:{...state.rooms, ...action.payload.data},
            }
        }
        case GET_ROOMS_FAIL: {
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        }
        case UPDATE_USER_START: {
            return {
                ...state,
                isLoading:true,
                error:""
            }
        }
        case UPDATE_USER_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                currentRoom:action.payload.currentRoom,
                currentTitle: action.payload.title,
                currentDescription: action.payload.description
            }
        }
        case UPDATE_USER_FAIL: {
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
