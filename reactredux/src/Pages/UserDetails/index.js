import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, UserImage, UserName, UserEmail } from './styles';
import AppLoading from '../../Components/AppLoading';

import { setUser } from '../../store/actions/userDetailsActions';

import api from '../../Services/api';

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
});

function UserDetails() {
    const user = useSelector(state => state.userDetailsReduces.user?.user);

    const { setUser } = actionDispatch(useDispatch())

    const { userId } = useParams();

    useEffect(() => {
        const fetchUsers = async (id) => {
            const response = await api.get(`users/${id}`).catch(err => {
                console.warn(err);
            });

            if (response) {
                setUser(response.data.data);
            }
        }

        if (userId) {
            fetchUsers(userId);
        }
        // eslint-disable-next-line
    }, [userId]);

    if (!user) {
        return(
            <AppLoading />
        );
    }

    return(
        <Container>
            <UserImage>
                <img src={user.avatar} alt={user.first_name}/>
            </UserImage>
            <UserName>
                {user.first_name} {user.last_name}
            </UserName>
            <UserEmail>
                {user.email}
            </UserEmail>
        </Container>
    );
}

export default UserDetails;
