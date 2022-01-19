import { configureStore, combineReducers } from '@reduxjs/toolkit';
import adminReducer from '../Redux/adminSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import productReducer from '../Redux/productSlice';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const rootReducer = combineReducers({ admin: adminReducer, product: productReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export let persistor = persistStore(store);