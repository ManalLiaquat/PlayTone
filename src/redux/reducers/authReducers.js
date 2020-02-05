import {AUTH} from '../../constants/reduxTypeNames';

const initialState = {
  auth: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case AUTH:
      return {...state, payload};

    default:
      return state;
  }
};
