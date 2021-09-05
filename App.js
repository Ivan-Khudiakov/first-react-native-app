import React from 'react'
import styled from 'styled-components/native'
import {Group} from "./components/Group/Group";

export default function App() {
    return (
        <Container>
            <Group groupTitle='14 september' items={[
                {
                    time: '12.30',
                    diagnosis: 'пульпит',
                    user: {
                        fullName: 'Василий Рогов',
                        avatar: 'https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png'}
                },
                {
                    time: '13.30',
                    diagnosis: 'флюс',
                    user: {
                        fullName: 'Андрей Ларин',
                        avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2.jpg'}
                },
                {
                    time: '14.30',
                    diagnosis: 'удаление зуба',
                    user: {
                        fullName: 'Анатолий Дукалис',
                        avatar: 'https://i06.fotocdn.net/s129/bb01329b8ba1efc7/user_xl/2924033751.jpg'}
                },
            ]}/>
        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  margin-top: 60px;
`;
