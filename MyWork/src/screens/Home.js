import React, { Component } from 'react';
import { Content, Footer, FooterTab, Button } from 'native-base';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';


export default class Home extends Component {

  render() {

    const { navigation } = this.props
  
    let pic = {
      uri: 'data:image/png;base64, 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',
      };
  
    return (
      <View style={styles.container}>
        <ImageBackground source={pic} style={styles.backgroundImage}>         
          <View style={styles.center}/>
          <View style={styles.center}>
            <Content>
              <Button style={styles.button}
                onPress={() => navigation.navigate('Detail')}>
                <Text style={styles.buttonText}>開始執行檢測</Text>
              </Button>
            </Content>
          </View>
          <Footer>
            <FooterTab  style={styles.UIColor_foot}>
              <Button style={styles.UIColor}>
                <Text></Text>
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground> 
      </View>
    )
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7B7B7B'
    },
    text: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold'
    },
    button: {
      backgroundColor:'rgba(178,178,178,0.0)',
      borderRadius: 8,
      padding: 40,
      margin: 35,
      borderWidth: 1,
      borderColor: 'white'
    },
    buttonText: {
      fontSize:20,
      color:'white',
      textAlign:'center',
      opacity:1.0
    },
    backgroundImage: {
      flex: 2,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      opacity: 0.75,
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    UIColor: {
      backgroundColor: '#333333',
    },
    UIColor_foot: {
      flex: 1,
      backgroundColor: '#7B7B7B'
    },
  })