import { combineReducers } from 'redux';
import PostReducer from './postReducer';
import userReducer from './usersReducer';

export default combineReducers({
    post: PostReducer,
    users: userReducer    
});

