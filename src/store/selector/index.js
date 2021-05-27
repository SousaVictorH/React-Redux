import { createSelector } from 'reselect';

const homePageState = (state) => state.homePageReducer;
const userPageState = (state) => state.userDetailsReduces;

export const makeSelectUsers = createSelector(homePageState, homePageReducer => homePageReducer.users);
export const makeSelectUser = createSelector(userPageState, userDetailsReduces => userDetailsReduces.user);
