import { TRAVEL_STATUS, TRAVEL_GET_TRAVELS } from '../../types'

import { post, get, put } from '../../utils/axiosHelper'
import { BACKEND_URL } from '../../AppConfig';
import { STATUS } from '../../constant';

function getTravels() {
    return dispatch => {
        dispatch(actions.setTravelStatus(STATUS.loading))
        get(`${BACKEND_URL}travel/get`).then(res => {
            let { data } = res;
            dispatch(actions.setTravelStatus(STATUS.success))
            dispatch(actions.setTravelList(data.data))
        }).catch(err => {
            dispatch(actions.setTravelStatus(STATUS.error))
        })
    }
}
function changeStatus(id, status) {
    return dispatch => {
        dispatch(actions.setTravelStatus(STATUS.loading))
        put(`${BACKEND_URL}travel/changeStatus?ID=${id}&status=${status}`).then(res => {
            let { data } = res;
            dispatch(actions.getTravels())
        }).catch(err => {
            dispatch(actions.setTravelStatus(STATUS.error))
        })
    }
}


const actions = {
    setTravelStatus: (status) => {
        return {
            type: TRAVEL_STATUS,
            payload: { status }
        }
    },
    setTravelList: (list) => {
        return {
            type: TRAVEL_GET_TRAVELS,
            payload: list
        }
    },
    getTravels,
    changeStatus
}

export default actions