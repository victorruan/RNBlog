/*
* Splash 用来制作一闪而过的开场画面
* 使用Image控件,width和height都使用设备宽高
* 如何获取设备高和宽
* */
import React,{Component} from 'react';
import {Dimensions} from 'react-native';

var {width,height} = Dimensions.get('window');

export default class Splash extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <Image style={{flex:1,width:width,height:height}} source={require('./welcome.jpg')}>
                </Image>
            </View>
        );
    }
}

