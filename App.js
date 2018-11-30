import React,{Component} from 'react';
import {Image,View,Text,StyleSheet} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
 import Main from './app/views/Main';
 import Index from './app/views/index';
 import My from './app/views/my';
 import Myinfo from './app/views/myinfo';
 const Tabnav =createBottomTabNavigator({
     Index:{
        screen: Index,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('./app/images/icon_5.png')}
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
        }
     },
     My:{
         screen:My,
         navigationOptions:{
            tabBarLabel:'个人中心',
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('./app/images/icon_7.png')}
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
        }
     },
 },{
     tabBarOptions: {
        //当前选中的tab bar的文本颜色和图标颜色
        activeTintColor: '#4398ff',
        //当前未选中的tab bar的文本颜色和图标颜色
        inactiveTintColor: '#000',
        //是否显示tab bar的图标，默认是false
        showIcon: true,
        //showLabel - 是否显示tab bar的文本，默认是true
        showLabel: true,
        //是否将文本转换为大小，默认是true
        upperCaseLabel: false,
        //material design中的波纹颜色(仅支持Android >= 5.0)
        pressColor: '#788493',
        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
        pressOpacity: 0.8,
        //tab bar的样式
        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop:1,
            borderTopColor: '#ccc',
        },
        //tab bar的文本样式
        labelStyle: {
            fontSize: 11,
            margin: 1
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: {height: 0},
    },
     tabBarPosition: 'bottom',
 })
const App = createStackNavigator({
    //默认加载第一个页面，这里用来注册需要跳转的页面 相当于Manifest.xml文件
    Main: {
        screen: Tabnav,
        navigationOptions:{
            header:null
        }
    },
    My: {
        screen: My,
    },
    Myinfo:{
        screen:Myinfo,
    }
});
const styles=StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
      },
})
export default App 

