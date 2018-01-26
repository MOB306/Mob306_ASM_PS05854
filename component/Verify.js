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

export default class Userlogin extends Component {

  static navigationOptions = {
    title: "Verify"
  }

  constructor() {
    super();
    this.state = {
      sologan: "Nhập mã số gồm 6 ký tự được gửi về điện thoại của bạn!",
      note1: "*Nhấn gửi lại nếu bạn không nhận được mã xác nhận.",
      note2: "Hãy chắc số điện thoại của bạn đã được nhập chính xác.",
      resend:"Gửi lại",
      ok:"Xác nhận",
      back:"Quay lại"
    };
  }
  render() {
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{
          flexDirection: 'column',
          justifyContent: 'center'
        }}>

          <Image
            style={styles.logo}
            source={require('../source/images/logo_yellow.png')}/>
          <Text style={styles.sologan}>
            {this.state.sologan}
          </Text>

        </View>

        <View style={styles.viewLogin}>
          <TextInput
            style={styles.edtName}
            placeholder='EW - 98541'
            underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.btnVerify}>
          <ButtonVerify insideButton={this.state.resend}/>
          <ButtonVerify insideButton={this.state.ok}/>
        </View>

        <View style={{
          marginTop: 20
        }}>

          <Text style={styles.txtNote}>
            {this.state.note1}
          </Text>
          <Text style={styles.txtNote}>
            {this.state.note2}
          </Text>

        </View>
        <TouchableOpacity onPress={()=>navigate("UpdateProfile",{})}>
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
      </View>

    );
  }
}

class ButtonVerify extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.twobtn}>
        <Text
          style={{
          alignSelf: 'center',
          color: 'white',
          fontSize: 20
        }}>
          {this.props.insideButton}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btnCreate: {
    height: 50,
    width: 160,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  twobtn: {
    height: 50,
    width: 130,
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: '#FCC711',
    justifyContent: 'center'
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
    marginTop: 20,
    marginBottom: 10,
    width: 280,
    height: 70,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column'
  },
  edtName: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  },
  edtPass: {},
  logo: {
    height: 150,
    width: 250,
    marginTop: 10,
    alignSelf: 'center'
  },
  sologan: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    width: 300
  },
  fgP: {
    color: 'white',
    alignSelf: 'center',
    position: 'relative'
  },
  btnVerify: {
    width: 280,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtNote: {
    color: 'white',
    alignSelf: 'center'
  }
});
