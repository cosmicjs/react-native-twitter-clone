import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Grid, Row } from 'native-base';

const sampleAvatar = require('../../assets/images/sample_avatar.jpg');

class SinglePost extends Component {
    render() {
        return (
            <Container style={{marginTop: 64}}>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail size={80} source={sampleAvatar} />
                            <Body>
                              <Grid>
                                <Row>
                                  <Text style={{fontWeight: '600', fontSize: 14}}>David Martin</Text>
                                  <Text style={{fontWeight: '200', fontSize: 12}}>@thenorthstarblues</Text>
                                </Row>
                              </Grid>
                              <Text style={{fontSize: 16}}>Here is one of my very funny tweets hee hee oh boy so good!</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default SinglePost;
