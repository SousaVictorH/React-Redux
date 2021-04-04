import React from 'react'

import { useHistory } from 'react-router-dom';

import { 
    Container,
    UserContainer, 
    UserImage, 
    UserName 
} from './styles';


function UserList({
    users
}) {
    const history = useHistory();

    const goToUserPage = (userId) => {
        history.push(`user/${userId}`);
    }

    const handleClick = (user) => {
        goToUserPage(user.id);
    };

    return(
        <Container>
            {users.map((user, index) => (
                <UserContainer key={index} onClick={() => handleClick(user)}>
                    <UserImage>
                        <img src={user.avatar} alt={user.first_name}/>
                    </UserImage>
                    <UserName>
                        {user.first_name} {user.last_name}
                    </UserName>
                </UserContainer>
            ))}
        </Container>
    );
}

export default UserList;
