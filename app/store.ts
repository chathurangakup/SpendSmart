import { configureStore, combineReducers} from '@reduxjs/toolkit';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MMKV } from 'react-native-mmkv'


import commonReducer from './slices/CommonSlice';

const combinedReducer = combineReducers({ 

  common: commonReducer,

})

const rootReducer = (state: any, action: any) => {
  console.log("state", state)
  console.log("state1", action)
  if (action.type === 'signup/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

// const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
global.store = store;

export const persistor = store



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch