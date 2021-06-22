import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    TextInput,
    Image } from 'react-native';


export default class Home extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: ''
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                 <ImageBackground source={require('../assets/home_bg.gif')} style={styles.backgroundImage}>
                  <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Coders' Lexicon</Text>
                        <Image source={require("../assets/headinglogo.jpeg")} style={styles.logoImage}/>
                        <TextInput style ={styles.bar} placeholder = "Quick Search.." onChangeText={(text)=>{this.setState({search:text})}}/>
          <TouchableOpacity style = {styles.searchButton}onPress={()=>this.props.navigation.navigate("Languages")}>
            <Text style={styles.searchText}>Search</Text>

          </TouchableOpacity>
                 

                    <TextInput
          style={styles.loginBox}
          placeholder="abc@gmail.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />


<TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:10}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >

            
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        
 
                   
            
                    
                    
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("AboutApp")
                    }>
                        <Text style={styles.routeText}> About App </Text>
                        
                    </TouchableOpacity>
                       </View>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    logoImage:{
      marginTop: 20,
      borderRadius: 20,
      width: 150,
      height: 150,

    },

    buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
       
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100
        
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
      marginTop: 250,
        fontSize: 40,
        fontWeight: "bold",
        color: "orange"
    },
    descriptionText: {
        marginTop: 100,
        alignItems : 'center',
        fontSize: 20,
        marginLeft: 50,
        color: "tomato"
    },
    routeText: {
        fontSize: 18,
        textDecorationLine: 'underline',
        color: 'white',
        fontFamily: 'comic sans',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
        bar:{
      marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'tomato',
    outline: 'none',
    backgroundColor: 'white',
    fontFamily: 'Amerika',
    fontSize: 30,
    borderRadius: 100
    },

    searchText: {
    textAlign: 'center',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color:'white'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10,
    marginTop: 20
  },
    routeImage: {
        position: "absolute",
        top: 3,
        right: 40,
        height: 40,
        width: 50,
        resizeMode: "contain"
    },
    searchButton: {
    width: '40%',
    height: 50,
    alignSelf: 'center',
    padding: 3,
    margin: 10,
    marginTop: 20,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'tomato',
    backgroundColor: 'tomato'
  },

    
});