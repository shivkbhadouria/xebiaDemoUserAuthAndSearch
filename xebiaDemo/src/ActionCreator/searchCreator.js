
import * as actionTypes from '../Action';
import { hitGetAPI } from '../Network/Server';


export const doSearch = () => {
    return {
        type: actionTypes.ACTION_SEARCH,
    }
}

export const searchSuccess = (json) => {
    return {
        type: actionTypes.ACTION_SEARCH_SUCCESS,
         value: json
    }
}

export const searchFail = err => {
   return {
       type: actionTypes.ACTION_SEARCH_FAIL,
   }
}

export const getPlanetsList = (URL) => {
    console.log('Search URL is', URL)
    return (dispatch, getState) => {
        dispatch(doSearch())
        hitGetAPI(URL)
        .then(([response, json]) => {
            dispatch(searchSuccess(json))
        })
        .catch((error) => dispatch(searchFail()))
    }


}