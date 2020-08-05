import { ACTIVATE_AUTH_LAYOUT, ACTIVATE_NON_AUTH_LAYOUT, IS_LARGE } from './actionTypes';

export const activateAuthLayout = () => {
    return {
        type: ACTIVATE_AUTH_LAYOUT,
        payload: {
            topbar: true,
            sidebar: true,
            footer: true,
            layoutType: 'Auth'
        }
    }
}

export const activateNonAuthLayout = () => {
    return {
        type: ACTIVATE_NON_AUTH_LAYOUT,
        payload: {
            topbar: false,
            sidebar: false,
            footer: false,
            layoutType: 'NonAuth'
        }
    }
}

export const isLarge = (isToggle) => {
    return {
        type: IS_LARGE,
        payload: isToggle
    }
}


