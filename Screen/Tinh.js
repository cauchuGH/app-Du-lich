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
    Button,
    TextInput,
    ImageBackground,
} from 'react-native';
import data from '../data/Tinh_data';
import tinh from '../data/Tinh_data'

export default class Tinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            danhSachTinh: tinh
        }
    }

    componentDidMount() {
        fetch('http://192.168.1.18:3000/trangchu')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    danhSachTinh: responseJson
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Lan')}}>
                <ImageBackground
                    source={{ uri: item.Image }}
                    style={style.Item_container}>

                    <View style={style.menu_Item}>
                        <Text style={style._text}>{item.TenTinh + ''}</Text>
                        <Text style={style._text}>{item.SoLan + ''}</Text>
                    </View>

                </ImageBackground>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            // <Button title = "click" onPress = {this.In()}></Button>
            <View>
                <View style={style.Seach}>
                    <TextInput
                        style={style.Seach_input}
                        keyboardType="default"
                        placeholder='   Seach...'>
                    </TextInput>
                    <Button title="seach"></Button>
                </View>
                {/* <TouchableOpacity style={style.Btn_them}>
                    <Text style = {{textAlign:"center", fontSize:50, color:'white'}}>+</Text>
                </TouchableOpacity> */}
                <FlatList
                    data={tinh}
                    //keyExtractor = {}
                    renderItem={this.renderItem}
                    style = {{
                            // justifyContent: 'flex-end', 
                            // alignItems:'flex-end'
                            marginBottom:100
                        }}>
                        
                </FlatList>
                
                <View style = {{
                        height:100,
                        width:100,
                        borderRadius:50,
                        backgroundColor:'red',
                        borderWidth: 2,
                        borderColor: 'grey',
                    }}></View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    Item_container: {
        flex: 1,
        flexDirection: 'column',
        height: 150,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    menu_Item: {
        flexDirection: 'row',
        height:150,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    Seach: {
        height: 80,
        paddingRight:15,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Seach_input: {
        height: 50,
        flex: 4,
        backgroundColor: 'white',
        marginRight: 15,
        marginLeft:15,
        borderRadius: 25,
        borderColor: 'gray',
        borderWidth: 2
    },
    _text:{
        textAlign: 'center', 
        color: 'white', 
        flex: 5, 
        fontSize:25,
    },
    Btn_them:{
        backgroundColor:'red',
        height:70,
        width:70,
        borderRadius:35,
        borderColor:'gray',
        borderWidth:2,
        alignSelf:'flex-end'
    }
})