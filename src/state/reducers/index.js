

import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import { sebetReducer } from "./sebetReducers";

const rootReducer = combineReducers({
    data:dataReducer,
    cart:sebetReducer
})

export default rootReducer