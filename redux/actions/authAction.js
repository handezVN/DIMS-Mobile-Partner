import ACTIONS from '.';
export const dispatchLogin = (payload, hotelid) => {
    return {
        type: ACTIONS.LOGIN,
        payload,
        hotelid,
    };
};
export const dispatchGetUser = (payload, hotelid) => {
    return {
        type: ACTIONS.GETUSER,
        payload,
        hotelid,
    };
};
export const dispatchRegister = (payload) => {
    return {
        type: ACTIONS.REGISTER,
        payload,
    };
};
export const dispatchReLoad = () => {
    return {
        type: ACTIONS.RELOAD,
    };
};

export const dispatchLogout = () => {
    return {
        type: ACTIONS.LOGOUT,
    };
};
export const dispatchFecth = () => {
    return {
        type: ACTIONS.FETCH,
    };
};
export const dispatchSuccess = () => {
    return {
        type: ACTIONS.SUCCESS,
    };
};
export const dispatchFailed = () => {
    return {
        type: ACTIONS.FAILED,
    };
};
export const dispatchFetchMenu = () => {
    return {
        type: ACTIONS.FETCH_MENU,
    };
};
export const dispatchSuccessMenu = (payload) => {
    return {
        type: ACTIONS.SUCCESS_MENU,
        payload,
    };
};
export const dispatchFailMenu = () => {
    return {
        type: ACTIONS.FAILED_MENU,
    };
};
