import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,TouchableOpacity ,Image } from 'react-native';

import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          
        <Image source={{
                    uri:
                      'https://clubeenvios.com.br/assets/img/CLUBE_ENVIOS.png'
                  }}
                    style={styles.logo}
                  />
        

      <Text 
      style={styles.text1}>Login</Text>
        </View>

        <View style={styles.meio}>


         
<View 
style={{
  justifyContent:"center",
  flexDirection:"row",
  alignItems:'center'
}}
>
  <Fontisto 
      name="email"
      color="#000"
      size={30}
      />
  <TextInput
           style={styles.input}
           placeholder="E-mail"
           />
</View>


           <View 
           style={{
             justifyContent:"center",
             flexDirection:"row",
             alignItems:'center'
           }}>

<Entypo 
            name="lock"
            color="#000"
            size={30}
            />
      <TextInput
               style={styles.input}
               placeholder="Senha"
             
            />
      </View>      

            <TouchableOpacity  style={styles.button}>
              <Text style={styles.text1}>Entrar</Text>
            </TouchableOpacity>

<TouchableOpacity>
            <Text 
      style={styles.text2}>Esqueci a senha</Text>
</TouchableOpacity>

</View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input:{
    borderWidth:1,
                margin:5,
                borderRadius:10,
                backgroundColor: '#b1b1b1',
                width:250,
                padding:5
  },
  text1:{
    color: '#fff',
    fontSize:18,
    fontWeight:'bold'
  },
  text2:{
    color: '#000',
    fontSize:15,
    // fontWeight:'bold'
  },
  header:{
    backgroundColor: '#4169E1',
          // flex: 1,
          height:100,
          width:'100%',
          justifyContent: 'center',
          alignItems:'center',
          // flexDirection:'row',
          // paddingHorizontal: 15
  },
  meio: {
    // backgroundColor: 'red',
    // flex: 1,
    height:'90%',
    justifyContent: 'center',
    alignItems:'center',
    // paddingHorizontal: 15
  },
  button:{
    backgroundColor:'#4169E1',
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,

  },
  logo: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain'
  },
});
