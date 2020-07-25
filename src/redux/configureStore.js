import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { initialFeedback } from './forms';
// import { Reducer, initialState } from './reducer';

// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer,
//         initialState
//     );
//     return store;
// }


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: initialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}