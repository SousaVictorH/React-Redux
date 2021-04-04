import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    justify-content: center;
    align-items: center;
`;

export const UserImage = styled.div`
    width: 18em;
    height: 18em;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const UserName = styled.div`
    font-size: 28px;
    color: var(--black);
    text-align: center;
    margin-top: 22px;
`;

export const UserEmail = styled.div`
    font-size: 18px;
    color: var(--gray);
    text-align: center;
    margin-top: 12px;
`;
