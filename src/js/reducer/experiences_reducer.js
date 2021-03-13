import {ADD_EXPERIENCES,
    EDIT_EXPERIENCES,
    DELETE_EXPERIENCES} 
    from '../const/actionTypes'

const initialeState={
    TabExperiences:[],
}
const experiences_reducer = (state = initialeState, { type, payload }) =>{
    switch (type) {
        case ADD_EXPERIENCES:
            return { ...state, TabExperiences: [...state.TabExperiences, payload] };

            case DELETE_EXPERIENCES:
                return {
                  ...state,
                  TabExperiences: state.TabExperiences.filter((el) => el.id !== payload),
                };
          
            
                case EDIT_EXPERIENCES:
                    return {
                      ...state,
                      TabExperiences: state.TabExperiences.map((el) =>
                        el.id === payload.id ? { ...el, experiences: payload.formModif } : el
                      ),
                    };
    
            default:
                return state;
            
    }
}
export default experiences_reducer