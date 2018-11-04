import { INIT_PAGE_ACTION } from "../../redux/constain";



const initializeDynamicReducer = {
    isLoadedInit: false,
    init: {
        components: [
            // {
            //     fieldName: '',
            //     type: '',
            //     placeholder: '',
            //     label: '',
            //     component: '',
            //     defaultValue: '',
            //     styles: {},
            //     validate: [],
            //     valueKey: '',
            //     disabled: false,
            //     isShowing: true
            // },
        ],
        apiSubmit: '',
        apiProcess: [],   
    }
}

export const dynamicReducer = (state = initializeDynamicReducer, action) => {
    switch (action.type) {
        case INIT_PAGE_ACTION:
            return {...state, init: action.payload, isLoadedInit: true}
        default:
           return state;
    }
}