import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler, TextInput, Button } from 'react-native';

class Calculator extends Component{
  constructor(props){
    super(props);
    this.state = {
      expression: 0,
      result: 0
    }
  }

  calculate(){
    result = eval(expression)
  }

  render(){
    const {expression, result} = this.state

    return(
      <View>
        <Text>Hello world</Text>
      </View>
    )
  }
}

export default Calculator;