import {
  ADD_COMPETENCES,
  EDIT_COMPETENCES,
  DELETE_COMPETENCES,
} from "../const/actionTypes";

const initialeState = {
  TabCompetences: [],
};
const competences_reducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case ADD_COMPETENCES:
      return { ...state, TabCompetences: [...state.TabCompetences, payload] };

    case DELETE_COMPETENCES:
      return {
        ...state,
        TabCompetences: state.TabCompetences.filter((el) => el.id !== payload),
      };
    case EDIT_COMPETENCES:
      return {
        ...state,
        TabCompetences: state.TabCompetences.map((el) =>
          el.id === payload.id ? { ...el, competences: payload.formModif } : el
        ),
      };

    default:
      return state;
  }
};
export default competences_reducer;
