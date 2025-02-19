import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import AxiosInstance from "../helpers/AxiosInstance";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onRegisterPress = async () => {
    if (!name || !email || !password) {
      setMessage('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    try {
      setLoading(true);
      const body = 
      { email, password, name };
      const response = await AxiosInstance().post('/users/register', body);

      console.log('Response:', response);
    
      if (response && response.status === true) {
        setMessage('Đăng ký thành công!');
      } else {
        setMessage('Đăng ký không thành công.');
      }
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
      setMessage('Đã xảy ra lỗi khi đăng ký.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Group 73.png")} style={styles.logo} />
      <Text style={styles.welcome}>Welcome to Lungo !!</Text>
      <Text style={styles.register}>Register to Continue</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={setName} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={onRegisterPress} disabled={loading}>
        <Text style={styles.textRegister}>{loading ? 'Đang đăng ký...' : 'Register'}</Text>
      </TouchableOpacity>

      <View style={styles.dnContainer}>
        <Text style={styles.dntk}>You have an account? Click{' '}</Text>
        <Link href="/Login">
          <Text style={styles.click}>Sign in</Text>
        </Link>
      </View>

      {/* Hiển thị thông báo nếu có */}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  click: { color: '#d17842' },
  dntk: { fontSize: 12, lineHeight: 26, color: '#828282' },
  dnContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  textRegister: { fontSize: 14, lineHeight: 26, color: '#fff', fontWeight: 'bold' },
  registerButton: { width: '100%', height: 57, backgroundColor: '#d17842', borderRadius: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center' },
  inputContainer: { width: '100%', paddingTop: 16 },
  input: { backgroundColor: '#fff', color: '#828282', width: '100%', height: 48, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8, fontWeight: 'bold' },
  register: { fontSize: 12, lineHeight: 26, color: '#828282', marginTop: 16, fontWeight: 'bold' },
  welcome: { fontSize: 16, lineHeight: 26, color: '#fff', marginTop: 10, fontWeight: 'bold' },
  logo: { width: 142, height: 142 },
  container: { flex: 1, backgroundColor: '#0c0f14', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 14 },
  message: { color: '#fff', marginTop: 20, fontSize: 16, fontWeight: 'bold' }
});
