import { createStore, applyMiddleware, compose,composeWithDevTools } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";



const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
 const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)))




 export default store;

