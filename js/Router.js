import React, { Component } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import List from './views/List';
import Writer from './views/Writer';
import Me from './views/Me';
import Chat from './views/Chat';

const MainScreenNavigator = TabNavigator({
    List: { // 选中与未选中状态分别使用不同的图标
        screen: List,
        navigationOptions: {
            tabBarLabel: '列表',
            headerLeft: null, // 去除返回按钮
            tabBarIcon: ({ tintColor, focused }) => (
                focused
                    ?
                    <Image
                        source={require('./static/images/list_act.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                    :
                    <Image
                        source={require('./static/images/list.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
            )
            // onNavigationStateChange: (() => alert("首页"))
            // initialRouteName:'IndexScreen'  
        },
    },
    Writer: {
        screen: Writer,
        navigationOptions: {
            tabBarLabel: '作者',
            headerLeft: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./static/images/writer.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
            // onNavigationStateChange: (() => alert("首页"))
            // initialRouteName:'IndexScreen'  
        }
    },
    Me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: '我',
            headerLeft: null,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <View>
                        {/* <Text>12</Text> */}
                        <Image
                            source={require('./static/images/me.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                    </View>
                )
            },
            // onNavigationStateChange: (() => alert("首页"))
            // initialRouteName:'IndexScreen'  
        }
    },
}, {
    initialRouteName: 'List',
    tabBarPosition: 'bottom',
    // swipeEnabled:false,
    // animationEnabled:false,
    tabBarOptions: {
        activeTintColor: '#0b0', // 文字和图片选中颜色
        inactiveTintColor: '#333', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fdfcfc', // TabBar 背景色
            height: 48
        },
        iconStyle: {
            height: 22,
        },
        labelStyle: {
            fontSize: 12, // 文字大小
            marginTop: 0,
            height: 16
        },
        // activeBackgroundColor:'white',
        // activeTintColor: '#a00',
        // inactiveBackgroundColor:'white',
    }
});

const Router = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: { screen: Chat }
}, {
    initialRouteName: 'Home', // 默认显示界面  
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)  
        // header: null,
        headerStyle: { elevation: 0, shadowOpacity: 0, height: 62, backgroundColor: "#373d41" },
        headerTitleStyle: { color: '#fff', fontSize: 14, alignSelf: 'center', paddingTop: 20 }, //alignSelf:'center'  文字居中  
        headerBackTitleStyle: { color: '#fff', fontSize: 12 },
        // headerTintColor:{},  
        gesturesEnabled: true,//是否支持滑动返回收拾，iOS默认支持，安卓默认关闭  
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)  
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏  
    onTransitionStart: (Start) => { console.log('导航栏切换开始'); },  // 回调  
    onTransitionEnd: () => { console.log('导航栏切换结束'); }  // 回调  
});

export default Router;

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b0',
    }
});
