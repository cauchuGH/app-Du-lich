import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Button,
    
} from 'react-native';

import Textarea from 'react-native-textarea';


export default class Them extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bd_Ngay: "",
            bd_Thang:"",
            bd_Nam: "",
            NoiDung:"",
        };
      }

      PostNoiDung(){
          fetch('')
      }

    render(){
        return(
            <View style = {style.container}>
                <View>
                
                </View>
                <View style = {style.date}>
                    <TextInput style={style._input} 
                    placeholder = 'Ngay'
                    keyboardType="numeric"
                    value={this.state.bd_Ngay}
                    onChangeText={(text) => this.setState({text})}></TextInput>
                    <TextInput style={style._input} 
                    placeholder = 'Thang'
                    keyboardType="numeric"
                    value={this.state.bd_Thang}
                    onChangeText={(text) => this.setState({text})}></TextInput>
                    <TextInput style={style._input} 
                    placeholder = 'Nam'
                    keyboardType="numeric"
                    value={this.state.bd_Nam}
                    onChangeText={(text) => this.setState({text})}></TextInput>
                </View>

                <Textarea style={{height: 400, width: 320, borderWidth:2, borderColor:'gray', margin:30}}
                value = {this.state.NoiDung}
                onChanceText = {(textarea)=>this.setState({textarea})}
                ></Textarea>

                <TouchableOpacity style = {style._Button_Anh}
                onPress={()=>{this.props.navigation.navigate('BaiViet')}}>
                    <Text style = {style._text_date_in}>Them Ảnh</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {style._Button_moi}
                onPress={()=>{this.props.navigation.navigate('BaiViet')}}>
                    <Text style = {style._text_date_in}>Them moi</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    
    _input: {
        height:50,
        borderBottomWidth:2,
        borderBottomColor:'blue',
        flex: 1,
        marginTop:50,
        marginLeft:20,
        marginRight:20
        
    },
    _text_date: {
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
        marginTop: 50,
        marginBottom:50,
        width: 300
        
    },
    _text_date_in:{
        textAlign: "center",
        fontSize: 15
    },
    date: {
        flexDirection:'row',
    },
    _Button_Anh: {
        height:30,
        width:150,
        borderRadius:25,
        borderWidth:3,
        borderColor:'gray',
        marginTop: 285,
        backgroundColor:'pink',

    },
    
    _Button_moi: {
        height:50,
        width:150,
        borderRadius:25,
        borderWidth:3,
        borderColor:'gray',
        marginTop: 20,
        backgroundColor:'darkgreen',
        color:'white'
    }


})