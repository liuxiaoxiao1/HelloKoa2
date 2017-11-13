import * as actionTypes from '../constants/userinfo'

const initialState =  {
    userid: 222,
    city: 'baidu'
}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_LOGIN:

             console.log(33333);
             console.log('action.data', action.data);
            return action.data


        // 修改城市
        case actionTypes.UPDATE_CITYNAME:
            return action.data

        default:
            return state
    }
}