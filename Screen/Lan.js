/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import lan from '../data/Lan_data'
export default class Lan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            danhSachTinh: lan
        }
    }
    componentDidMount() {
        try {
            fetch('http://192.168.1.18:3000/trangchu')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    danhSachTinh: responseJson
                })
            })
        } catch (error) {
            console.log(error)
        }
        
            
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('BaiViet')}}>
                <ImageBackground
                    source={{ uri: item.Image }}
                    style={style.Item_container}>
                    <View style={style.menu_Item}>
                        <Text style={style._text}>{item.BatDau }</Text>
                        <Text style={style._text}> To </Text>
                        <Text style={style._text}>{item.KetThuc }</Text>
                    </View>
                    <Text style={style.AnTuong}>{item.AnTuong}</Text>

                </ImageBackground>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={style.container}>
                <View style = {style._header}>
                    <Text style = {{fontSize:45, textAlign:'center',color: 'white', flex :4,}}>Hà Giang</Text>
                    <TouchableOpacity style = {{ flex:1}}
                    onPress = {()=>{this.props.navigation.navigate('ThemLan')}}>
                        <Text style = {{fontSize:55, textAlign:'left',color: 'white', }}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.danhSachTinh}
                    renderItem={this.renderItem}>
                </FlatList>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    Item_container: {
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection:'column',

    },
    _header: {
        height: 80,
        backgroundColor: 'pink',
        flexDirection: "row",
        color:'white',
        marginBottom:10,
        justifyContent:'center',
        alignContent:'center',
    },
    
    menu_Item:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    _text:{
        fontSize: 20,
        color:'white',
    },
    AnTuong:{
        color:'white',
        textAlign:'center',
        fontSize:25,

    },
})