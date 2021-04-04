import React from 'react'

import { Container } from './styles';

import { useSelector } from 'react-redux';

// import { createSelector } from 'reselect';
// import { makeSelectUsers } from '../../store/selector';

// const stateSelector = createSelector(makeSelectUsers, (users) => {
//     return users;
// });

function Home() {
    const users = useSelector(state => state.homePageReducer.users);
    // const state = useSelector(stateSelector);

    console.log(users);

    return (
        <Container>
            <h1>Hello world!</h1>
        </Container>
    )
}

export default Home;
