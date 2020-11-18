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
    Button
} from 'react-native';

export default class Them extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bd_Ngay: "",
            bd_Thang:"",
            bd_Nam: "",
            kt_Ngay:"",
            kt_Thang: "",
            kt_Nam:""
        };
      }

      PostData(){

      }

    render(){
        return(
            <View style = {style.container}>
                <View style = {style._text_date}>
                    <Text style = {style._text_date_in}>Ngay Bat Dau</Text>
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
                
                <View style = {style._text_date}>
                    <Text style = {style._text_date_in}>Ngay Ket Thuc</Text>
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
                <TouchableOpacity style = {style._Button}
                onPress = {()=>{this.props.navigation.navigate('Lan')}}>
                    <Text style = {style._text_date_in}>Them moi</Text>
                </TouchableOpacity>
            </View>  
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
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
        width: 300
        
    },
    _text_date_in:{
        textAlign: "center",
        fontSize: 15
    },
    date: {
        flexDirection:'row',
    },
    _Button: {
        height:50,
        width:150,
        borderRadius:25,
        borderWidth:3,
        borderColor:'green',
        marginTop: 150,
        backgroundColor:'darkgreen',

    }


})