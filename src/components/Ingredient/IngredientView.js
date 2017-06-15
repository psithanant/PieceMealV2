import React, { Component } from 'react';
import { Image } from 'react-native';
import { H3, Badge, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';

const badgeStyle = { backgroundColor: 'black' };
const textStyle = { color: 'white' };
export default class IngredientView extends Component {

    render() {
        return (
            <Content>
                <Card style={{
                    flex: 1
                }}>
                    <CardItem header style={{
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Futura',
                            fontSize: 24,
                            marginTop: 20,
                            paddingTop: 15
                        }}>
                            {this.props.ingredient.name.toUpperCase()}
                        </Text>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Image style={{
                                resizeMode: 'contain',
                                width: 340,
                                height: 200
                            }} source={this.props.ingredient.image}/>
                            <Text note style={{
                                fontFamily: 'Futura',
                                marginLeft: 20,
                                marginRight: 15,
                                marginTop: 15,
                                marginBottom: 10,
                                alignSelf: 'center'
                            }}>
                                "{this.props.ingredient.description}"
                            </Text>
                        </Body>
                    </CardItem>
                    {/* <CardItem>
                        {!this.props.recipe
                            ? <Spinner/>
                            : <RecipeSteps instructions={this.props.recipe.instructions}/>
                        }
                    </CardItem> */}
                    {/* <CardItem footer style={{
                        paddingBottom: 25
                    }}>
                        <Text style={{
                            fontFamily: 'Futura'
                        }} note>{this.props.recipe.alternatives}</Text>
                    </CardItem> */}
                    <CardItem footer>
                        <Badge style={badgeStyle}>
                            <Text style={textStyle}>vegetarian</Text>
                        </Badge>
                        <Badge style={badgeStyle}>
                            <Text style={textStyle}>vegan</Text>
                        </Badge>
                        <Badge style={badgeStyle}>
                            <Text style={textStyle}>dairy</Text>
                        </Badge>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}
