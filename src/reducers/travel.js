import { STATUS } from '../constant';

import { TRAVEL_STATUS, TRAVEL_GET_TRAVELS } from '../types'
const initState = {
    status: STATUS.default,
    list: []
}

const travel = (state = initState, action) => {
    let { payload } = action
    switch (action.type) {
        case TRAVEL_STATUS:
            return {
                ...state,
                status: payload.status
            }
        case TRAVEL_GET_TRAVELS:
            return {
                ...state,
                list: payload
            }
        default:
            return state
    }
}


export default travel