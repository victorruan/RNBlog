import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,PixelRatio,ListView
} from 'react-native';

import 入门学习 from './入门学习/入门学习';
import {WatchFace} from './计时器/表盘';
import {WatchControl} from './计时器/控制按钮';
//class WatchFace extends Component{
//    static propTypes = {
//        sectionTime: React.PropTypes.string.isRequired,
//        totalTime: React.PropTypes.string.isRequired
//    };
//
//    render() {
//        return(
//            <View style={styles.watchFaceContainer}>
//                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
//                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
//            </View>
//        )
//    }
//}
//class WatchControl extends Component{
//    static propTypes = {
//        stopWatch: React.PropTypes.func.isRequired,
//        clearRecord: React.PropTypes.func.isRequired,
//        startWatch: React.PropTypes.func.isRequired,
//        addRecord: React.PropTypes.func.isRequired,
//    };
//
//    constructor(props){
//        super(props);
//        this.state = {
//            watchOn: false,
//            startBtnText: "启动",
//            startBtnColor: "#60B644",
//            stopBtnText: "计次",
//            underlayColor:"#fff"
//        };
//    }
//
//    _startWatch() {
//        if (!this.state.watchOn) {
//            this.props.startWatch();
//            this.setState({
//                startBtnText: "停止",
//                startBtnColor: "#ff0044",
//                stopBtnText: "计次",
//                underlayColor:"#eee",
//                watchOn: true
//            })
//        }else{
//            this.props.stopWatch();
//            this.setState({
//                startBtnText: "启动",
//                startBtnColor: "#60B644",
//                stopBtnText: "复位",
//                underlayColor:"#eee",
//                watchOn: false
//            })
//        }
//    }
//
//    _addRecord() {
//        if (this.state.watchOn) {
//            this.props.addRecord()
//        }else{
//            this.props.clearRecord();
//            this.setState({
//                stopBtnText: "计次"
//            })
//        }
//    }
//
//    render() {
//        return(
//            <View style={styles.watchControlContainer}>
//                <View style={{flex:1,alignItems:"flex-start"}}>
//                    <TouchableHighlight style={styles.btnStop} underlayColor={this.state.underlayColor} onPress={()=>this._addRecord()}>
//                        <Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
//                    </TouchableHighlight>
//                </View>
//                <View style={{flex:1,alignItems:"flex-end"}}>
//                    <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> this._startWatch()}>
//                        <Text style={[styles.btnStartText,{color:this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
//                    </TouchableHighlight>
//                </View>
//            </View>
//        )
//    }
//}
class WatchRecord extends Component{
    static propTypes = {
        record: React.PropTypes.array.isRequired
    };

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}), theDataSource = ds.cloneWithRows(this.props.record);
        return (
            <ListView
                style={styles.recordList}
                dataSource={theDataSource}
                renderRow={(rowData) =>
                    <View style={styles.recordItem}>
                        <Text style={styles.recordItemTitle}>{rowData.title}</Text>
                        <View style={{alignItems: "center"}}>
                            <Text style={styles.recordItemTime}>{rowData.time}</Text>
                        </View>
                    </View>
            }/>
        );
    }
}
class Watch extends Component{
    constructor(){
        super();
        this.state = {
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ]
        };
    }

    componentWillUnmount() {
        this._stopWatch();
        this._clearRecord();
    }

    _startWatch() {
        if (this.state.resetWatch) {
            this.setState({
                stopWatch: false,
                resetWatch: false,
                timeAccumulation:0,
                initialTime: (new Date()).getTime()
            })
        }else{
            this.setState({
                stopWatch: false,
                initialTime: (new Date()).getTime()
            })
        }
        let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
        let interval = setInterval(
            () => {
                this.setState({
                    currentTime: (new Date()).getTime()
                })
                countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
                minute = Math.floor(countingTime/(60*1000));
                second = Math.floor((countingTime-60000*minute)/1000);
                milSecond = Math.floor((countingTime%1000)/10);
                seccountingTime = countingTime - this.state.recordTime;
                secminute = Math.floor(seccountingTime/(60*1000));
                secsecond = Math.floor((seccountingTime-60000*secminute)/1000);
                secmilSecond = Math.floor((seccountingTime%1000)/10);
                this.setState({
                    totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
                    sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
                })
                if (this.state.stopWatch) {
                    this.setState({
                        timeAccumulation: countingTime
                    })
                    clearInterval(interval)
                };
            },10);
    }

    _stopWatch() {
        this.setState({
            stopWatch: true
        })
    }
    _addRecord() {
        let {recordCounter, record} = this.state;
        recordCounter++;
        if (recordCounter<8) {
            record.pop();
        }
        record.unshift({title:"计次"+recordCounter,time:this.state.sectionTime});
        this.setState({
            recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
            recordCounter: recordCounter,
            record: record
        });
    }
    _clearRecord() {
        this.setState({
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        });
    }
    render(){
        return(
            <View style={styles.watchContainer}>
                <WatchFace totalTime={this.state.totalTime} sectionTime={this.state.sectionTime}/>
                <WatchControl addRecord={()=>this._addRecord()} clearRecord={()=>this._clearRecord()} startWatch={()=>this._startWatch()} stopWatch={()=>this._stopWatch()}></WatchControl>
                <WatchRecord record={this.state.record}></WatchRecord>
            </View>
    );
    }
}
class victorruan extends Component{
    render(){
        return (
            <Watch style={{backgroundColor:'#000'}}></Watch>
        );
    }
}

const styles =  StyleSheet.create({
    watchContainer:{
        backgroundColor: '#000',//背景变黑
        paddingTop: 50,
        alignItems: "center",
    },
    watchFaceContainer:{
        width: Dimensions.get('window').width ,
        paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
        backgroundColor: "#fff",
        borderBottomWidth: 1, borderBottomColor:"#ddd",
        height: 170,
    },
    sectionTime:{
        fontSize: 20,
        fontWeight:"100",
        paddingRight: 30,
        color: "#555",
        position:"absolute",
        left:Dimensions.get('window').width-140,
        top:30
    },
    totalTime:{
        fontSize: Dimensions.get('window').width === 375? 70:60,
        fontWeight: "100",
        color: "#222",
        paddingLeft:20
    },
    watchControlContainer:{
        width: Dimensions.get('window').width,
        height: 190,
        flexDirection:"row",
        backgroundColor: '#000',
        paddingTop: 90,
        paddingLeft: 60,
        paddingRight:60,
        paddingBottom:0,
    },
    btnStart:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    btnStop:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    btnStartText:{
        fontSize:14,
        backgroundColor:"transparent"
    },
    btnStopText:{
        fontSize:14,
        backgroundColor:"transparent",
        color:"#555"
    },
    recordList:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 350,
        paddingLeft: 15,
        paddingRight: 15
    },
    recordItem:{
        height: 40,
        borderBottomWidth:1/PixelRatio.get(),borderBottomColor:"#bbb",
        paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
        flexDirection:"row",
        alignItems:"center"
    },
    recordItemTitle:{
        backgroundColor:"transparent",
        flex:1,
        textAlign:"left",
        paddingLeft:20,
        color:"#777"
    },
    recordItemTime:{
        backgroundColor:"transparent",
        flex:1,
        textAlign:"right",
        paddingRight:20,
        color:"#222"
    }
});
AppRegistry.registerComponent('victorruan', () => WatchControl);
