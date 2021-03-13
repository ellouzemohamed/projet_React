import {
  ADD_FORMATION,
  DELETE_FORMATION,
  EDIT_FORMATION,
} from "../const/actionTypes";
const initialState = {
  tabFormation: [],
};

const formation_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FORMATION:
      return { ...state, tabFormation: [...state.tabFormation, payload] };

    case DELETE_FORMATION:
      return {
        ...state,
        tabFormation: state.tabFormation.filter((el) => el.id !== payload),
      };

    case EDIT_FORMATION:
      return {
        ...state,
        tabFormation: state.tabFormation.map((el) =>
          el.id === payload.id ? { ...el, formation: payload.formModif } : el
        ),
      };
    default:
      return state;
  }
};
export default formation_reducer;
