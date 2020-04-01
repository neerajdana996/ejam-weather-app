import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import weatherReducers from "./Reducers/weather.reducers";
import { watchAuth } from "./Saga";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    weatherState: weatherReducers
    
  });


  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watchAuth);
  
  export  {store};