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
  Icon,
  Alert
} from 'react-native';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Logo from './com/Logo'
import ButtonFace from './com/ButtonFace';
import Rule from './com/Rule';
import Or from './com/Or';
// import ButtonCreateBack from './com/ButtonCreateBack';

export default class Userlogin extends Component {
  constructor() {
    super();
    this.state = {
      sologan: "Đăng nhập để nhận vô vàn giải thưởng trong hệ thống của chúng tôi",
      forgot: "Quên mật khẩu ?",
      or: "Hoặc",
      facebook: "Đăng nhập với Facebook",
      register: "Tạo tài khoản mới",
      rule: "Điều khoản sử dụng",
      email: "Địa chỉ Email",
      pass: "Mật khẩu"
    };
  }

  _facebook = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed')
      }, {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => console.log('OK Pressed')
      }
    ], {cancelable: false})
  }

  render() {

    var {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>

        <Logo sologan={this.state.sologan}/>

        <View style={styles.viewLogin}>
          contentContainerStyle={styles.container}
          scrollEnabled={false}>

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
              placeholder={this.state.pass}
              underlineColorAndroid='transparent'/>
          </View>

          <View
            style={{
            height: 1,
            backgroundColor: 'black',
            width: 250,
            alignSelf: 'center'
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
          top: -80,
          left: 310,
          zIndex: 1
        }}>
          <Image source={require('../source/images/btnOK.png')}/>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("FogotPass", {})}>
          <Text style={styles.fgP}>
            {this.state.forgot}
          </Text>
        </TouchableOpacity>

        <Or or={this.state.or}/>

        <ButtonFace/>

        <TouchableOpacity onPress={() => navigate("CreateNew", {})}>
          <View style={styles.btnCreate}>
            <Text
              style={{
              color: 'white',
              fontSize: 14
            }}>
              {this.state.register}
            </Text>
          </View>
        </TouchableOpacity>

        <Rule/>

      </View>

      ); } } const _AlertExample = () => {}

    const styles = StyleSheet
    .create({
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
      },
      fgP: {
        color: 'white',
        alignSelf: 'center',
        position: 'relative'
      },
      container: {
        flex: 1,
        backgroundColor: '#121A1E'
      },
      container_login: {
        backgroundColor: 'blue',
        flexDirection: 'column'
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
      viewInput: {
        flexDirection: 'row'
      },
      edtName: {
        width: 200,
        marginLeft: 20,
        // windowSoftInputMode:'adjustResize'
      }});