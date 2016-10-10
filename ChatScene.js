import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,ScrollView,TextInput,ListView} from 'react-native';
import Header from './Header';



class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={{textAlign:'left'}}>{rowData}</Text>}
                />
            </View>
        );
    }
}

class ChatScene extends Component {
    render() {
        return (
            <View>
                <Header/>
                <ListViewBasics />
                <TextInput
                    style={{height: 40}}
                    placeholder="请输入聊天内容"
                />
            </View>
        );
    }
}
module.exports = ChatScene;