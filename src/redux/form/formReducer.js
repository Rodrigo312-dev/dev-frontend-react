import { SET_FORM_DATA, LOGIN_FORM_DATA, CLEAN_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
    passCorrect: 'mod7ReactUSIP',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                formData:{
                    ...state.formData,
                    ...action.payload,
                },
            }
        }
        case LOGIN_FORM_DATA : {
            if (state.passCorrect === action.payload.password)
            {
                return {
                    ...state,
                    formData:{
                        ...state.formData,
                        ...action.payload,
                    },
                }
            }
            return state;
        }
        case CLEAN_FORM_DATA: {
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: '',
                },    
            }
        }
        default:
            return state;
    }
};

export default formReducer;