import { configureStore } from '@reduxjs/toolkit';
import { tg_modalState } from '@teselagen/ui';
import { vectorEditorReducer as VectorEditor, vectorEditorMiddleware } from '@teselagen/ove';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';


const actionDenylist = ["HOVEREDANNOTATIONUPDATE", "HOVEREDANNOTATIONCLEAR"];

const ignoreActionMiddleware = (store) => (next) => (action) => {
  if (actionDenylist.includes(action.type)) {
    // Don't dispatch blacklisted actions
    return;
  }

  return next(action);
};

// Create a store using configureStore
const store = configureStore({
  reducer: {
    form,
    tg_modalState,
    VectorEditor: VectorEditor(),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, vectorEditorMiddleware, ignoreActionMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;