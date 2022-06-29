import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

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

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={styles.textBlack}>Ordem de serviço</Text>

            <Text
              style={styles.textBlack}>[Sua empresa]</Text>
          </View>

        </View>

        <View style={styles.meio}>

          <ScrollView>
            <View style={{
              justifyContent: 'center',
              flexDirection: 'row'
            }}>
              <View
                style={{
                  backgroundColor: '#4983BB',
                  width: '40%'
                }}
              >
                <Text style={styles.textBlack}>Cliente</Text>
                <Text style={styles.textBlack}>Atendido por</Text>
                <Text style={styles.textBlack}>Local de prestação</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#C6D9F1',
                  width: '60%'
                }}
              >
                {/* <Text>Cliente</Text>
  <Text>Atendido por</Text>
  <Text>Local de prestação</Text> */}
              </View>

            </View>

            {/* //OS */}


            <View style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 10
            }}>
              <View
                style={{
                  backgroundColor: '#4983BB',
                  width: '40%'
                }}
              >
                <Text style={styles.textBlack}>OS nº</Text>
                <Text style={styles.textBlack}>Data</Text>
                <Text style={styles.textBlack}>Hora</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#C6D9F1',
                  width: '60%'
                }}
              >
                <Text style={styles.textBlack}>001</Text>
                {/* <Text>Atendido por</Text>
  <Text>Local de prestação</Text> */}
              </View>

            </View>



            {/* //Descrição de serviço */}





            <View style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 10
            }}>
              <View
                style={{
                  backgroundColor: '#4983BB',
                  width: '60%',
                  borderWidth: 1,
                  borderColor: '#fff'
                }}
              >
                <Text style={styles.textBlack}>Descrição de serviço</Text>
                {/* <Text>Data</Text>
  <Text>Hora</Text> */}
              </View>

              <View
                style={{
                  backgroundColor: '#4983BB',
                  width: '40%',
                  borderWidth: 1,
                  borderColor: '#fff'
                }}
              >
                <Text style={styles.textBlack}>Endereço de cobrança</Text>
                {/* <Text>Atendido por</Text>
  <Text>Local de prestação</Text> */}
              </View>

            </View>

            <View style={{
              justifyContent: 'center',
              flexDirection: 'row',
              // marginTop:10
            }}>
              <View
                style={{
                  backgroundColor: '#C6D9F1',
                  width: '60%',
                  borderWidth: 1,
                  borderColor: '#fff',
                  height: 50
                }}
              >

              </View>

              <View
                style={{
                  backgroundColor: '#C6D9F1',
                  width: '40%',
                  borderWidth: 1,
                  borderColor: '#fff',
                  height: 50
                }}
              >

              </View>


            </View>


            <View style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 10
            }}>
              <View
                style={{
                  backgroundColor: '#4983BB',
                  width: '20%',
                  borderWidth: 1,
                  borderColor: '#fff'
                }}
              >
                <TextInput>
                  <Text style={styles.textBlack}>ID</Text>
                </TextInput>

              </View>

              <View
                style={{
                  backgroundColor: '#4983BB',
                  width: '20%',
                  borderWidth: 1,
                  borderColor: '#fff'
                }}
              >
                <Text style={styles.textBlack}>Quantidade</Text>

              </View>

              <View
                style={{
                  backgroundColor: '#4983BB',
                  width: '60%',
                  borderWidth: 1,
                  borderColor: '#fff'
                }}
              >
                <Text style={styles.textBlack}>Produto utilizado ou serviço Prestado</Text>

              </View>

            </View>


            <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>


              <View style={{
                width: 200,
                flex: 1,
              }}>
                <View
                  style={styles.preços}
                >
                  <Text style={styles.textBlack}>Subtotal</Text>

                </View>
                <View
                  style={styles.preços}
                >
                  <Text style={styles.textBlack}>Descontos</Text>

                </View>
                <View
                  style={styles.preços}
                >
                  <Text style={styles.textBlack}>Acréscimos</Text>

                </View>
                <View
                  style={styles.preços}
                >
                  <Text style={styles.textBlack}>Total</Text>

                </View>
              </View>


              <View style={{
                width: 200,
                flex: 1

              }}>
                <View
                  style={styles.preços2}
                >
                  <Text style={styles.textBlack2}>R$ 0.00</Text>

                </View>
                <View
                  style={styles.preços2}
                >
                  <Text style={styles.textBlack2}>R$ 0.00</Text>

                </View>
                <View
                  style={styles.preços2}
                >
                  <Text style={styles.textBlack2}>R$ 0.00</Text>

                </View>
                <View
                  style={styles.preços2}
                >
                  <Text style={styles.textBlack2}>R$ 0.00</Text>

                </View>
              </View>


            </View>

            <View
              style={{ flexDirection: 'row', marginTop: 20 }}
            >
              <TouchableOpacity style={styles.forma}>
                <Text style={styles.textBlack}>Forma de pagamento</Text>
              </TouchableOpacity>

              <TextInput
                style={styles.pagamento}

              />
            </View>


            <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.textBlack}>Autorizo e concordo com a realização dos serviços listados conforme o combinado.</Text>
              <Text style={styles.textBlack}>Data e local</Text>

              <View style={{ flexDirection: 'row', width: '100%' }}>
                <TextInput style={{ borderWidth: 1, width: '50%' }}></TextInput>


                <TextInput style={{ borderWidth: 1, width: '50%' }}></TextInput>

                <Text style={styles.textBlack, { marginTop: 100 }}>Data e local</Text>

              </View>



            </View>

          </ScrollView>
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
  backAzul: {
    backgroundColor: '#4983BB',
    width: '60%',
    borderWidth: 1,
    borderColor: '#fff'
  },

  input: {
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#b1b1b1',
    width: 250,
    padding: 5
  },
  pagamento: {
    // borderWidth: 1,
    // margin: 5,
    // borderRadius: 10,
    backgroundColor: '#C6D9F1',
    // width: 250,
    // padding: 5,
    width: 200,
    height: 50,
  },
  text1: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  text2: {
    color: '#000',
    fontSize: 15,
    // fontWeight:'bold'
  },
  text3: {
    color: '#fff',
    fontSize: 12,
    // fontWeight:'bold'
  },
  textBlack: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  textBlack2: {
    color: '#fff',
    fontSize: 12,
    paddingRight: 5,
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#4169E1',
    // flex: 1,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 100
  },
  meio: {
    // backgroundColor: 'red',
    // flex: 1,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 15
  },
  button: {
    backgroundColor: '#4169E1',
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  forma: {
    backgroundColor: '#4169E1',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius:10,

  },
  logo: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain'
  },
  preços: {
    backgroundColor: '#4983BB',
    width: 150,
    height: 60,
    borderWidth: 1,
    borderColor: '#fff',
    // marginTop:50,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  preços2: {
    backgroundColor: '#4983BB',
    width: 150,
    height: 60,
    borderWidth: 1,
    borderColor: '#fff',
    // marginTop:50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});
