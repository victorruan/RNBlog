import React,{Component} from 'react';
import {Dimensions,StyleSheet,View} from 'react-native';
export class WatchControl extends Component{
    render(){
        return(<View style={styles.WatchControlContainer}>
            <View style={styles.BtnOne}></View>
            <View style={styles.BtnTwo}></View>
        </View>);
    }
}

const styles = StyleSheet.create({
    WatchControlContainer:{
        width:Dimensions.get('window').width,
        height:190,
        flexDirection:"row",
        backgroundColor:'#000',
        paddingTop:90,
        paddingLeft:60,
        paddingRight:60,
        paddingBottom:0
    },
    BtnOne:{
        flex:1,
        backgroundColor:'#fff'
    },
    BtnTwo:{
        flex:1,
        backgroundColor:'red'
    }
});