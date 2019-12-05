import * as actionTypes from '../Action';
import { hitGetAPI } from '../Network/Server';


export const doAuthenticate = () => {
    return {
        type: actionTypes.ACTION_AUTHENTICATE,
    }
}

export const authenticateSuccess = (json) => {
    return {
        type: actionTypes.ACTION_AUTHENTICATE_SUCCESS,
         value: json
    }
}

export const authenticateFail = err => {
   return {
       type: actionTypes.ACTION_AUTHENTICATE_FAIL,
   }
}

export const doAuthenticateMethod = (URL) => {
    return (dispatch, getState) => {
        dispatch(doAuthenticate())
        hitGetAPI(URL)
        .then(([response, json]) => {
            dispatch(authenticateSuccess(json))
        })
        .catch((error) => dispatch(authenticateFail()))
    }


}