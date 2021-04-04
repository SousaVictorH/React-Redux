import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 80%;
    background-color: var(--white);
`;

export const Content = styled.div`
    text-align: center;
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        height: 100px;
        padding: 20px;
        margin-bottom: 50px;
    }
`;
