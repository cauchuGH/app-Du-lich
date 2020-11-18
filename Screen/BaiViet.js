import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';

import baiviet from '../data/BaiViet_data'
export default class BaiViet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List_BaiViet: baiviet,
        }
    }
    componentDidMount() {
        fetch('http://172.19.200.77:3000/trangchu')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                this.setState({ List_BaiViet: responseJson });
            }).catch(function (error) {
                console.log(error);
            })
    }
    renderItem = ({ item }) => {
        return (
            <View style={style.Item_Container}>
                <Text style={style.time}>     {item.ThoiGian}</Text>
                <Text style={style.NoiDung}>{item.NoiDung}</Text>
                {/* <ImageBackground style={style._image}
                    source={require('../Image/hinh-anh-chu-chim-dep.jpg')}>
                        <Text style={{ 
                            width: 320, 
                            height: 300 }}>
                        </Text>
                </ImageBackground> */}
                <Image 
                    source = {{uri: item.Image}}
                    resizeMode= 'contain'
                    style = {{
                        width: 300, 
                        height: 400}}>

                </Image>
                <Text style={style.NoiDung}>{item.NoiDung2}</Text>
                <ImageBackground style={style._image}
                    source={require('../Image/hinh-anh-chu-chim-dep.jpg')}><Text style={{ width: 320, height: 300 }}></Text></ImageBackground>
                <View style={style.btn_container}>
                    <TouchableOpacity style={style.btn}><Text style={{ margin: 5, color: 'white' }}>Sửa</Text></TouchableOpacity>
                    <TouchableOpacity style={style.btn}><Text style={{ margin: 5, color: 'white' }}>Xóa</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={{ height: 50, backgroundColor: 'pink', justifyContent: 'center', alignContent: 'center', }}
                    onPress={() => { this.props.navigation.navigate('ThemBaiViet') }}>
                    <Text style={{ fontSize: 45, color: 'white', textAlign: 'center' }}>+</Text>
                </TouchableOpacity>


                <FlatList
                    data={this.state.List_BaiViet}
                    renderItem={this.renderItem}>
                </FlatList>

            </View>
        )
    }
}

const style = StyleSheet.create({
    Item_Container: {
        flexDirection: 'column',
        minHeight: 300,
        margin: 15,
        borderRadius: 30,
        borderColor: 'gray',
        borderWidth: 2,
        backgroundColor: '#FFFFF0',
    },
    time: {
        height: 50,
        margin: 10,
        fontSize: 18,
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
        color: 'black',

    },
    NoiDung: {
        fontSize: 15,
        color: '#FF00FF',
        margin: 20,
        minHeight: 100,
    },
    _image: {
        borderWidth: 2,
        borderColor: 'grey',
        marginLeft: 25,
        maxWidth: 330,
    },
    btn_container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopColor: 'gray',
        borderTopWidth: 3,
        margin: 20,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4B0082',
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        width: 100
    }

})