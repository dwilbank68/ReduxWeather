import {FETCH_WEATHER} from '../actions/index';

export default (state = [], action) => {

    switch (action.type) {
        case FETCH_WEATHER: return [ ...state, action.payload.data ];
        default: return state;
    };
};

// describe('weatherReducer', () => {
//     it('should ', () => {
//         var action = {
//
//         }
//         var res = reducers.weatherReducer(df(), df(action));
//         expect(res).toEqual();
//     });
// });

