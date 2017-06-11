import { ActionConst } from 'react-native-router-flux';

export default (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return {...state, scene };
        default:
            return state;
    }
}
