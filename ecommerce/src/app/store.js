import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../Redux/cartSlice';
import userReducer from '../Redux/userSlice';
import searchReducer from '../Redux/searchSlice';
import productReducer from '../Redux/productSlice'
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

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer, search: searchReducer, product: productReducer });

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