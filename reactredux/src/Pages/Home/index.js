import React, { useEffect } from 'react'

import UserList from '../../Components/UserList';
import { Container } from './styles';

import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '../../store/actions/homePageActions';
import api from '../../Services/api';

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
})

function Home() {
    const users = useSelector(state => state.homePageReducer.users);
    const { setUser } = actionDispatch(useDispatch());

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await api.get('users').catch(err => {
                console.warn(err);
            });
    
            setUser(response.data.data);
        }

        fetchUsers();
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <UserList 
                users={users}
            />
        </Container>
    )
}

export default Home;

/*
    Uma alternativa para pegar dados do redux:

    import { createSelector } from 'reselect';
    import { makeSelectUsers } from '../../store/selector';

    const stateSelector = createSelector(makeSelectUsers, (users) => {
        return users;
    });

    const state = useSelector(stateSelector);
*/
