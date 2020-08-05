import { ACTIVATE_AUTH_LAYOUT, ACTIVATE_NON_AUTH_LAYOUT, IS_LARGE } from './actionTypes';

const initialState = {
    topbar: true,
    sidebar: true,
    footer: true,

    is_large_state: false
}

const layout = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_AUTH_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case ACTIVATE_NON_AUTH_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case IS_LARGE:
            state = {
                ...state,
                is_large_state: action.payload
            }
            break;

        default:
            state = { ...state };
            break;
    }
    return state;
}

export default layout;