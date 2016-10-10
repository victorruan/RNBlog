/*
* 这里我要自己动手写个表盘
* 这个表盘需要两个属性
* ①总时间(total_time)
* ②段时间(section_time)
* */
/*
* 感觉 View 有点像 div
* */
import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';

export class WatchFace extends Component{
    render(){
        return (<View style={styles.WatchFaceContainer}>
            <Text style={styles.SectionTime}>{this.props.sectionTime}</Text>
            <Text style={styles.TotalTime}>{this.props.totalTime}</Text>
        </View>);
    }
}
//如何获取设备的宽度
var windowWidth = Dimensions.get('window').width;
//如何写样式?
const styles = StyleSheet.create({
    WatchFaceContainer:{
        backgroundColor: '#000',//背景变黑
        width:windowWidth,//宽度等于屏幕宽
        paddingLeft:20
    },
    SectionTime:{
        fontSize: 20,
        color: "#fff",
        left:windowWidth-140,
        fontWeight:"200"
    },
    TotalTime:{
        //这个地方如果让字体居中,就会发现不断抖动,很不舒服斯基
        color:"#fff",
        fontSize: 80,
        paddingLeft:10,
        fontWeight:"200"
    }
});