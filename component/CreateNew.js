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

import Logo from './com/Logo';
import Rule from './com/Rule';
import ButtonFace from './com/ButtonFace';

export default class CreatNew extends Component {

  constructor() {
    super();
    this.state = {
      sologan: " Đăng nhập để nhận vô vàn giải thưởng trong hệ thống của chúng tôi",
      facebook: "Đăng nhập với Facebook",
      rule: "Điều khoản sử dụng",
      name: "Họ và tên",
      email: "Địa chỉ Email",
      pass: "Mật khẩu",
      back: "Quay lại"
    };
  }

  static navigationOptions = {
    title: "CreatNew"
  }
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo sologan={this.state.sologan}/>

        <View style={styles.viewLogin}>
          <View style={styles.viewInput}>
            <Image
              style={{
              height: 20,
              width: 20,
              alignSelf: 'center'
            }}
              source={require('../source/images/icon/ic_u.png')}/>

            <TextInput
              style={styles.edtName}
              placeholder={this.state.name}
              underlineColorAndroid='transparent'/>

          </View>

          <View
            style={{
            height: 1,
            backgroundColor: 'black'
          }}/>

          <View style={styles.viewInput}>
            <Image
              style={{
              height: 20,
              width: 20,
              alignSelf: 'center'
            }}
              source={require('../source/images/icon/ic_mail.png')}/>
            <TextInput
              style={styles.edtName}
              placeholder={this.state.email}
              underlineColorAndroid='transparent'/>
          </View>

          <View
            style={{
            height: 1,
            backgroundColor: 'black'
          }}/>


          <View style={styles.viewInput}>
            <Image
              style={{
              height: 20,
              width: 20,
              alignSelf: 'center'
            }}
              source={require('../source/images/icon/ic_pw.png')}/>
            <TextInput
              style={styles.edtName}
              placeholder={this.state.pass}
              underlineColorAndroid='transparent'/>
          </View>
        </View>

        <TouchableOpacity
          style={{
          top: -100,
          left: 310,
          zIndex: 1
        }}
          onPress=
          { () => navigate("UpdateProfile",{}) }>
          <Image source={require('../source/images/btnOK.png')}/>
        </TouchableOpacity>
        <View>
          <TouchableOpacity >
            <View style={styles.btnFace}>
              <Image source={require('../source/images/icF.png')}/>
              <Text
                style={{
                color: 'white',
                marginLeft: 20,
                fontSize: 18
              }}>{this.state.facebook}</Text>
            </View>
          </TouchableOpacity>

          {/* Button Create Acc */}
          <TouchableOpacity onPress= { ()=> navigate("Userlogin",{}) }>
            <View style={styles.btnCreate}>
              <Text
                style={{
                color: 'white',
                fontSize: 14
              }}>
                {this.state.back}
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
  container_login: {
    backgroundColor: 'blue',
    flexDirection: 'column'
  },
  
  viewInput: {
    flexDirection: 'row',
  },
  edtName: {
    width: 200,
    marginLeft: 20
  },
  logo: {
    height: 150,
    width: 250,
    marginTop: 10,
    alignSelf: 'center'
  },
  sologan: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    width: 290
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
    marginBottom: 10
  }
});
