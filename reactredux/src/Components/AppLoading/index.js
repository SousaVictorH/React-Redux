import React from 'react'

import { Container, Content } from './style';

import Spinner from 'react-spinkit';

function AppLoading() {
    return (
        <Container>
            <Content>
                <Spinner 
                    name='three-bounce'
                    color='purple'
                />
            </Content>
        </Container>
    )
}

export default AppLoading;
