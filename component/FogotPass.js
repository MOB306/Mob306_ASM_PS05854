import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  CustomButton,
  Button,
  TouchableOpacity,
  Icon
} from 'react-native';

import ButtonFace from './com/ButtonFace';
import Logo from './com/Logo';
import Rule from './com/Rule';


export default class FogotPass extends Component {

  static navigationOptions = {
    title: "FogotPass"
  }

  constructor(props){
    super(props);
    this.state={
      sologan:"Hãy nhập chính xác Email mà bạn đăng ký tài khoản!",
      text2:"Chúng tôi sẽ gửi mật khẩu mới vào hòm thư của bạn!",
      or:"Hoặc",
    };
  }

  render() {

    var {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        
        <Logo sologan={this.state.sologan}/>

        <View style = {styles.viewLogin}>
          <TextInput
            style={styles.edtName}
            placeholder="Địa chỉ email"
            underlineColorAndroid='transparent'
          />
          </View>
          <TouchableOpacity
            style={{
              top: -60,
              left:310,
              zIndex: 1
            }}
            onPress ={
              ()=> navigate("UpdateProfile",{})
            }
            >
          <Image
            source={require('../source/images/btnOK.png')}/>

          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.fgP}>
            {this.state.text2}
            </Text>
          </TouchableOpacity>

        <View style={styles.fogetPass}>
          <View style={styles.viewLine}>
            <View style={styles.line}></View>
            <Text
              style={styles.or}>{this.state.or}</Text>
            <View style={styles.line}></View>
          </View>
        </View>

        <View>

          <ButtonFace/>

          {/* Button Create Acc */}
          <TouchableOpacity
          onPress={
            ()=> navigate("Userlogin",{})
          }>
            <View style={styles.btnCreate}>
              <Text
                style={{
                color: 'white',
                fontSize: 14
              }}>
                Quay lại
              </Text>
            </View>
          </TouchableOpacity>
          
          <Rule/>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A1E'
  },
  container_login:{
    backgroundColor:'blue',
    flexDirection:'column'
  },
  viewLogin: {
    backgroundColor: 'white',
    top: 20,
    width: 280,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    zIndex: 1
  },
  edtName: {
    padding: 20
  },
  edtPass: {},
  logo: {
    height: 150,
    width: 250,
    marginTop:10,
    alignSelf: 'center'
  },
  sologan: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    width: 240
  },
  fgP: {
    color: 'white',
    alignSelf: 'center',
    position: 'relative',
  },
  viewLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  or:{
    color: 'white',
    fontSize: 14
  },
  line: {
    height: 1,
    alignSelf: 'center',
    width: 100,
    margin: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  btnFace: {
    height: 50,
    width: 300,
    backgroundColor: '#3B5998',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  btnCreate: {
    height: 50,
    width: 160,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
  }
});
