import { SET_FORM_DATA, LOGIN_FORM_DATA, CLEAN_FORM_DATA } from './formTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}
export const loginFormData = (formData) => {
    return {
        type: LOGIN_FORM_DATA,
        payload: formData,
    }
}
export const logOutFormData = () => {
    return {
        type: CLEAN_FORM_DATA,
    }
}