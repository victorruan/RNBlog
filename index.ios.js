import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Image,ScrollView} from 'react-native';
import Markdown from 'react-native-simple-markdown';
class Header extends Component{
  render(){
    return(
        <View style={{flex: 1,height:58,backgroundColor: '#6e9fc8',alignItems: 'center',paddingTop:18}}>
          <Image source={{uri:'https://sfault-avatar.b0.upaiyun.com/296/137/2961371780-577f25f65b3de_medium40'}} style={{width:40,height:40,borderRadius:20,borderColor:'white',borderWidth:1}}/>
        </View>
    );
  }
}

class Footer extends Component{
    render(){
        return(
            <View style={{flex: 1,height:42,backgroundColor: '#6e9fc8',alignItems: 'center',paddingTop:15}}>
                <Text>copyright by victorruan</Text>
            </View>
        );
    }
}

class Title extends Component{
  render(){
    return(
        <View style={{backgroundColor:'#6e9fc8',opacity:1}}>
          <Text  style={{textAlign:'center',marginTop:25,color: 'white',fontWeight: 'bold'}}>
            victorruan
          </Text>
        </View>
    );
  }
}

class PaperList extends Component{
  render(){
    return(
        <View style={{paddingHorizontal:20,paddingTop:20}}>
            <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>文章列表</Text>
            <ScrollView>
                <Text style={{fontSize:16,color:'#337ab7'}}> Vue.js学习指南</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> 如何创建composer包 </Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> iScroll 5 API 中文版</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> 简单的ActiveRecord(php实现)</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> Workerman</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> BootStrap</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> slim中文网 </Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> silm框架初使用</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> 简易聊天室</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> php如何实现基于事件驱动的网络编程</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> HTTP 协议详解</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> 如何用php实现一个web服务器</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> sf的未解决问题(爬虫)</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> swoole学习</Text>
                <Text style={{fontSize:16,color:'#337ab7'}}> epoll</Text>
            </ScrollView>
        </View>

    );
  }
}
const styles_markdown = {
    heading1: {
        fontSize: 22
    },
    strong: {
        fontSize: 18
    },
    paragraph: {
        fontSize: 14
    },
    view: {
        borderWidth: 1
    }
};
class WelcomeText extends Component{
  render(){
    return(
        <View style={{backgroundColor:'#eee',opacity:1,paddingHorizontal:20,paddingBottom:20}}>
          <Text style={{fontSize:40,fontWeight:'bold',textAlign:'center'}}>welcome</Text>
          <Text>      这是一个简易的小博客,是我使用react native写出来练手的,喜欢这个demo的朋友可以参考此demo的源码</Text>
          <Text>      我是一个程序员,一个主PHP的程序员,我很喜欢Laravel Yii,最近在研究slim,如果你有任何关于php的问题,同时我在学习nodeJS,取其精,去其糟,我发现express同silm的思想很像,当然nodeJs远远比不上php</Text>
        </View>
    );
  }
}


class victorruan extends Component {
  render() {
    return (
        <View>
          <Title/>
          <Header/>
          <WelcomeText/>
          <PaperList/>
            <Footer/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('victorruan', () => victorruan);
