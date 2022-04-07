import React, {useState, useEffect} from 'react';
import {ScrollView, SafeAreaView, StatusBar, 
  ImageBackground, View, Text, TouchableOpacity, TextInput, StyleSheet} from'react-native';
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [ isNameValid, setIsNameValid] = useState()
  const [ isEmailValid, setIsEmailValid] = useState()
  const [ isPasswordValid, setIsPasswordValid] = useState()
  const checkIfNameIsValid = () => {
      const nameRegex = /^[a-zA-z]+$/;
          if (nameRegex.test(name)) {
              setIsNameValid(true)
          }
          else{
              setIsNameValid(false)
          }    
      }
  const checkIfEmailIsValid = () => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if (emailRegex.test(email)) {
              setIsEmailValid(true)
          }
          else{
              setIsEmailValid(false)
          }    
      }
  const onSignUpPress = () => {
      if (isNameValid == false){
            alert("Enter a Valid Name")
        }else if (email == 0){
            alert("Email is Empty")
        } else if (isEmailValid == false){
          alert ("Enter a Valid Email")
        } else if (isPasswordValid == false){
          alert("Password must be atleast 8 character")
        }
        else{ 
          navigation.navigate("Login")
        }
  }

  useEffect (()=>{
      checkIfNameIsValid();
      checkIfEmailIsValid();
  });
  return(
    <ScrollView keyboardShouldPersistTaps = "always" style = {{backgroundColor:'white'}}>
      <StatusBar barStyle='white' backgroundColor={'#5ba39f'}/>
      <SafeAreaView>
        <View style = {styles.container}>
          <View style = {styles.centeredView}>
            <LinearGradient
               start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
               colors={['rgba(49, 123, 215, 1)', '#92D854']}
               style={styles.linearGradient1}
            >
              <Text style = {styles.text1}>Sign Up Page</Text>
            </LinearGradient>
            <View style={styles.inputArea} >
            <View style={styles.textView}>
                <Ionicons  style = {styles.icon} name="person" size={18} color="#5ba39f" />
                <TextInput
                selectTextOnFocus={true}
                style={styles.inputText}
                keyboardType= 'email-address'
                placeholder="User Name"
                placeholderTextColor="grey"
                editable={true}
                value={name}
                onChangeText={val => setName(val)}
                blurOnSubmit={false}
                />
              </View>
              <View style={styles.textView}>
                <MaterialCommunityIcons  style = {styles.icon} name="email" size={18} color="#5ba39f" />
                <TextInput
                selectTextOnFocus={true}
                style={styles.inputText}
                keyboardType= 'email-address'
                placeholder="Email"
                placeholderTextColor="grey"
                editable={true}
                value={email}
                onChangeText={val => setEmail(val)}
                blurOnSubmit={false}
                />
              </View>
              <View style={styles.textView}>
                <Fontisto style = {styles.icon} name="locked" size={18} color="#5ba39f" />
                <TextInput
                  style={styles.inputText}
                  secureTextEntry={true}
                  textContentType="password"
                  placeholder="Password"
                  placeholderTextColor="grey"
                  editable={true}
                  value={password}
                  onChangeText={val => setPassword(val)}
                  maxLength = {8}
                />
              </View>
            </View>
            <TouchableOpacity onPress={onSignUpPress}>
              <View style = {{flexDirection:'column', justifyContent:'space-around'}}>
              <LinearGradient
               start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
               colors={['rgba(49, 123, 215, 1)', '#92D854']}
               style={styles.linearGradient2}
            >
              <Text style = {styles.text1}>Sign Up</Text>
            </LinearGradient>
                <View style = {styles.button}>
                  <View style = {styles.leftButton}> 
                  </View>
                  <View style = {styles.rightButton}></View>
                </View>
                </View>
              </TouchableOpacity>
              <View style = {styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style = {styles.password}> Already have an account. Login</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                  <Text style = {styles.account}> Create an account ?</Text>
                </TouchableOpacity> */}
              </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    margin: 0,
    padding:0
},
centeredView: {
  marginLeft: '12%',
  marginRight: '12%',
  height:'68%',
  backgroundColor:'#f7f7f7',
  margin:'36%',
  elevation: 5
},
text1: {
  color: 'white',
  fontWeight: '800',
  fontSize: 16,
  textTransform: 'uppercase',
  alignSelf: 'center',
 // marginTop: '4%'
},
linearGradient1: {
         padding: 16
},
linearGradient2: {
  padding: 12,
  marginTop: '4%',
  width: '124%',
  marginLeft:'-12%',
},
        
inputArea: {
  alignItems: 'center',
  margin:'4%',
  marginTop:'12%'
},
icon: {
  marginLeft:'4%'
},
textView: {
  width: '100%',
  alignItems: 'center',
  flexDirection: 'row',
  alignSelf: 'center',
  borderColor: '#ccc',
  borderWidth: 1,
  marginTop:'6%',
  borderRadius: 10,
  backgroundColor:'white'
},
inputText: {
  fontSize: 15,
  color: 'grey',
  marginLeft: 10
},
button: {
  flexDirection:'row',
  justifyContent: 'space-between'
},
leftButton: {
  backgroundColor:'rgba(49, 123, 215, 1)',
 
  padding:16,
  borderBottomLeftRadius: 80,
  marginLeft:'-12%',
  height: 2
},
rightButton: {
  backgroundColor:'#92D854',
  padding:16,
  borderBottomRightRadius: 80,
  marginRight:'-12%'
},
link: {
  flexDirection:'column',
  justifyContent:'space-around',
  alignSelf:'center'
},
password: {
  color: '#81a8bf',
  fontSize:12,
  textAlign:'center'
 // marginTop:'4%'
},
account: {
  color: '#81a8bf',
  marginTop:'6%',
  fontSize:12,
  textAlign:'center'
}

})
export default SignUp;