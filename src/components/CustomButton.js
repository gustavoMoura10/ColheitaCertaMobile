import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import CustomBottomStyle from '../styles/CustomButtonStyle'
export default function CustomButton({label}){
   //BOTÃO REUTILIZÁVEL
    return (
        <TouchableOpacity style={CustomBottomStyle.button}>
            <Text style={CustomBottomStyle.text}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}
