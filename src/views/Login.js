import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton'
import LoginStyle from '../styles/LoginStyle';
import axiosHelper from '../helpers/axiosHelper';

//TELA DE LOGIN
export default function Login(props) {

    //UTILIZAÇÃO DE ESTADOS MUTÁVEIS (ALTERAM EM RELAÇÃO A TELA)
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    //FUNÇÃO ASSINCRONA
    async function doLogin(e) {
        try {
            //ENVIAR API
            const request = await axiosHelper.post('',user);
        } catch (error) {
            //CONDICIONAIS CASO DE ALGUM ERRO
            console.log(error);            
        }
    }
    //O QUE VAI APARECER
    return (
        <View style={LoginStyle.container}>
            <Text style={LoginStyle.title}>
                SOU TELA DE LOGIN
            </Text>
            <TextInput placeholder={"Email"} style={LoginStyle.input}
                onChange={(value) => { setUser({ ...user, email: value }) }} />
            <TextInput placeholder={"Password"} style={LoginStyle.input}
                secureTextEntry={true}
                onChange={(value) => { setUser({ ...user, password: value }) }} />
            <TextInput placeholder={"Confirm Password"} style={LoginStyle.input}
                secureTextEntry={true}
                onChange={(value) => { setUser({ ...user, confirmPassword: value }) }} />
            <TouchableOpacity>
                <Text>
                    Enviar
                </Text>
            </TouchableOpacity>
            {/**
             * COMPONENTES PARA SE REUTILIZAR EM OUTRAS TELAS
             */}
            <CustomButton {...props} label="SOU REUTILIZAVEL" />
        </View>
    )
}

