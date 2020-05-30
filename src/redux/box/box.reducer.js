import BoxActionTypes from "./box.types";

import { checkBoxIndexColor } from "./box.utils";

// Keeping track of each box's current color
const initialState = {
  box1_index_color: 0,
  box2_index_color: 0,
  box3_index_color: 0,
};

const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case BoxActionTypes.CHANGE_BOX1_COLOR:
      return {
        ...state,
        box1_index_color: checkBoxIndexColor(state.box1_index_color),
      };
    case BoxActionTypes.CHANGE_BOX2_COLOR:
      return {
        ...state,
        box2_index_color: checkBoxIndexColor(state.box2_index_color),
      };
    case BoxActionTypes.CHANGE_BOX3_COLOR:
      return {
        ...state,
        box3_index_color: checkBoxIndexColor(state.box3_index_color),
      };
    default:
      return state;
  }
};

export default boxReducer;
