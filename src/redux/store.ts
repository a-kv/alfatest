import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import cards from "./reducers/cards";

const reducers = combineReducers({
    cards
})


const store = createStore(reducers, applyMiddleware(thunk));

type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

export default store;