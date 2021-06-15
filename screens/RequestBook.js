import React from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView} from  'react-native';


export default class RequestBook extends React.Component{

    render(){
        return (        
        <View style="styles.container">
            <KeyboardAvoidingView style={styles.keyboardStyle}>
                    <Text style="styles.textStyle">Request Book</Text>
            </KeyboardAvoidingView>
            
        </View>
        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    textStyle:{
        fontSize:16,
        color:'black'
    },
    keyboardStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

