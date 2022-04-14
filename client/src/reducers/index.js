import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import images from './images';

export default combineReducers({
    auth,
    alerts, 
    images
});