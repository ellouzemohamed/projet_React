import {
  ADD_FORMATION,
  DELETE_COMPETENCES,
  DELETE_FORMATION,
  EDIT_COMPETENCES,
  EDIT_FORMATION,
  ADD_COMPETENCES
} from "../const/actionTypes";
import {
  ADD_EXPERIENCES,
  DELETE_EXPERIENCES,
  EDIT_EXPERIENCES,
} from "../const/actionTypes";

export const add_formation = (payload) => {
  return {
    type: ADD_FORMATION,
    payload,
  };
};
export const edit_formation = (payload) => {
  return {
    type: EDIT_FORMATION,
    payload,
  };
};
export const delete_formation = (payload) => {
  return {
    type: DELETE_FORMATION,
    payload,
  };
};

export const add_experiences = (payload) => {
  return {
    type: ADD_EXPERIENCES,
    payload,
  };
};
export const edit_experiences = (payload) => {
  return {
    type: EDIT_EXPERIENCES,
    payload,
  };
};

export const delete_experiences = (payload) => {
  return {
    type: DELETE_EXPERIENCES,
    payload,
  };
};

export const add_competences = (payload) => {
  return {
    type: ADD_COMPETENCES,
    payload,
  };
};
export const edit_competences = (payload) => {
  return {
    type: EDIT_COMPETENCES,
    payload,
  };
};
export const delete_competences = (payload) =>{
    return {
        type: DELETE_COMPETENCES,
        payload,
    }
}
