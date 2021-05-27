import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    width: 100%;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
`;

export const UserImage = styled.div`
    width: 7em;
    height: 7em;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const UserName = styled.h2`
    font-size: 20px;
    color: var(--black);
    text-align: center;
`;
