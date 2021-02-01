import thinkMiddleware from 'redux-thunk'
import {applyMiddleware, compose} from "redux";

const middlewares = []

middlewares.push(thinkMiddleware)

const storeEnhancer = compose(
    applyMiddleware(
        ...middlewares
    )
)

export default storeEnhancer