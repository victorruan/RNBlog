import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,ScrollView} from 'react-native';
class Header extends Component{
    render(){
        return(
            <View style={{flex: 1,height:58,backgroundColor: '#6e9fc8',alignItems: 'center',paddingTop:18}}>
                <Image source={{uri:'https://sfault-avatar.b0.upaiyun.com/296/137/2961371780-577f25f65b3de_medium40'}} style={{width:40,height:40,borderRadius:20,borderColor:'white',borderWidth:1}}/>
            </View>
        );
    }
}

module.exports = Header;