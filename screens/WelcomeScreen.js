import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,Alert,Modal ,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import SantaClaus from '../components/SantaClaus';


export default class WelcomeScreen extends React.Component{


    constructor(){
      super();
      this.state={
        emailId:'',
        password:'',
        firstName:'',
        lastName:'',
        address:'',
        contact:'',
        confirmPassword:'',
        isModalVisible:'false'
      }
    }
    userSignUp = (emailId, password,confirmPassword) =>{
      if(password !== confirmPassword){
          return Alert.alert("password doesn't match\nCheck your password.")
      }else{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(()=>{
          db.collection('users').add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            contact:this.state.contact,
            email_id:this.state.emailId,
            address:this.state.address
          })
          return  Alert.alert(
               'User Added Successfully',
               '',
               [
                 {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
               ]
           );
        })
        .catch((error)=> {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        });
      }
    }

    login=()=>{

      firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password)
      .then((response)=>{
        //return Alert.alert("Successfully logged in!!");
      this.props.navigation.navigate('donateBooks');
      })
      .catch(function(error){
        return Alert.alert(error.message);
      });

    }
/*
    signUp=(email,pwd)=>{
      //console.log(email);
      firebase.auth().createUserWithEmailAndPassword(this.state.emailId,this.state.password)
      .then((response)=>{
        return Alert.alert("User successfully added!");
      })
      .catch(function(error){
          return Alert.alert(error.message);
      });       
    }*/


    showModal = ()=>{
      return(
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
        >
        <View style={styles.modalContainer}>
          <ScrollView style={{width:'100%'}}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
            <Text
              style={styles.modalTitle}
              >Registration</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Email"}
              keyboardType ={'email-address'}
              onChangeText={(text)=>{
                this.setState({
                  emailId: text
                })
              }}
            /><TextInput
              style={styles.formTextInput}
              placeholder ={"Password"}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            /><TextInput
              style={styles.formTextInput}
              placeholder ={"Confrim Password"}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  confirmPassword: text
                })
              }}
            />
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={()=>
                  this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                }
              >
              <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={()=>this.setState({"isModalVisible":false})}
              >
              <Text style={{color:'#ff5722'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    )
    }
        render(){
            return (
                <View style={styles.container}>
                    <View style={{margin:20}}>
                    {
            this.showModal()
          }
                  <Text style={[styles.testStyle,{fontSize:40}]}>Book Santa</Text>   
                  {//<SantaClaus></SantaClaus>
                  }
                    </View>
                  <View>
                      <TextInput
                      placeholder="abc@example.com"
                      keyboardType="email-address"
                      style={styles.textBox}
                      onChangeText={(text)=>{
                        this.setState({emailId:text});
                      }}
                      >                       
                      </TextInput>                 

                   
                      <TextInput
                      placeholder="Enter your password"
                      secureTextEntry={true}
                      style={styles.textBox}
                      onChangeText={(text)=>{
                            this.setState({
                                password:text
                            });
                      }}
                      >                       
                      </TextInput>
                      
                  </View>      

                  <View>
                      <TouchableOpacity style={styles.buttonStyle}
                      onPress={()=>{
                          this.login();
                      }}>
                        <Text style={styles.testStyle}>Login</Text>
                      </TouchableOpacity>

                      <TouchableOpacity  style={styles.buttonStyle}
                      onPress={()=>this.setState({ isModalVisible:true})}
                      >
                         <Text style={styles.testStyle}>Sign Up</Text>
                      </TouchableOpacity>
                  </View>   
                </View>
              );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testStyle:{
      color:'pink',
      fontSize:14
  },
  textBox:{
      backgroundColor:'lightblue',
      margin:10,
      padding:10
  },
  buttonStyle:{
      backgroundColor:'#000000',
      alignItems:"center",
      margin:10,
      width:100,
      padding:10
    }
});
