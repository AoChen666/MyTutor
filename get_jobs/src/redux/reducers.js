/**
 * 
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERROR_MSG,UPDATA_FAIL,UPDATA_MSG} from './action-types';
const initUser = {
    username:'',
    type:'',
    msg:'',
}
function user (state=initUser,action) {
    switch(action.type){
        case AUTH_SUCCESS:
            return {...action.data}
        case ERROR_MSG:
            return {...state,msg:action.data}
        case UPDATA_MSG:
            return {...action.data}
        case UPDATA_FAIL:
            return {...action.data}
        default:
            return state
    }
}
export default combineReducers({
    user,
});