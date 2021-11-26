import {useReducer} from 'react';

const initialState = {
  favorites : []
}

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}