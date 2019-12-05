
import * as actionTypes from '../Action';
import { hitGetAPI } from '../Network/Server';


export const doSearch = () => {
    return {
        type: actionTypes.ACTION_AUTHENTICATE,
    }
}

export const searchSuccess = (json) => {
    return {
        type: actionTypes.ACTION_AUTHENTICATE_SUCCESS,
         value: json
    }
}

export const searchFail = err => {
   return {
       type: actionTypes.ACTION_AUTHENTICATE_FAIL,
   }
}

export const doAuthenticateMethod = (URL) => {
    return (dispatch, getState) => {
        dispatch(doSearch())
        hitGetAPI(URL)
        .then(([response, json]) => {
            console.log('URL===>', URL)
            console.log('response api===', json)
            dispatch(searchSuccess(json))
        })
        .catch((error) => dispatch(searchFail()))
    }


}