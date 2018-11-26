import { combineReducers } from 'redux';
import navigationData from './navigationData';
import logs from './alerts';
export default combineReducers({
 navigationData,
 logs
});