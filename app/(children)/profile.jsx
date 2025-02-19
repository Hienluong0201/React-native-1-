import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { AppContext } from "../../app-context/index"; 
import React, { useContext, useState } from "react";
import AxiosInstance from "../../helpers/AxiosInstance"; // Import AxiosInstance
import Toast from 'react-native-toast-message';

const Profile = () => {
  const router = useRouter();
  const { user, setUser } = useContext(AppContext); // Lấy user và setUser từ context
  const [name, setName] = useState(user?.name || ''); // Dữ liệu tên người dùng
  const [email, setEmail] = useState(user?.email || ''); // Dữ liệu email người dùng
  const [password, setPassword] = useState('');  // Dữ liệu password mới
  const [loading, setLoading] = useState(false);

  
  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      const body = {
        email, // email mới
        password, // mật khẩu mới
        name, // tên mới
      };

      const response = await AxiosInstance().post('/users/update-profile', body);
      console.log("reponse", response)
      // Kiểm tra xem response.data có tồn tại và có thuộc tính status không
      if (response && response.status === true) {
        setUser({ ...user, name, email }); // Cập nhật thông tin user trong context
       // Khi cập nhật thành công
        Toast.show({
          type: 'success',
          text1: 'Thành công',
          text2: 'Cập nhật thông tin thành công!',
        });
      } else {

      }
    } catch (error) {
      if (error.response) {
        console.log('Error Response:', error.response);
        Toast.show({
          type: 'error',
          text1: 'Lỗi',
          text2: 'Cập nhật thông tin thất bại.',
        });
        
      } else if (error.request) {
        console.log('Error Request:', error.request);
        Toast.show({
          type: 'error',
          text1: 'Lỗi',
          text2: 'Cập nhật thông tin thất bại.',
        });
        
      } else {
        console.log('Error Message:', error.message);
        Toast.show({
          type: 'error',
          text1: 'Lỗi',
          text2: 'Cập nhật thông tin thất bại.',
        });
        
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => router.push('/home/cart')}>
          <Image source={require('../../assets/images/backk.png')} />
        </TouchableOpacity>
        <Text style={styles.textpayment}>Setting</Text>
        <View></View>
        <View></View>
      </View>

      <Image source={require('../../assets/images/nguoimoi.png')} style={styles.nguoimoi} />

      <View style={styles.prest}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>

      <View style={styles.prest}>
        <TextInput
          style={styles.input}
          placeholder={user?.email || "Email"}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.prest}>
        <TextInput
          style={styles.input1}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Image source={require("../../assets/images/Vector.png")} style={styles.eye} />
      </View>

      <View style={styles.prest}>
        <TextInput
          style={styles.input1}
          placeholder="Re-type password"
        />
        <Image source={require("../../assets/images/Vector.png")} style={styles.eye} />
      </View>

      <TouchableOpacity
        style={styles.btnSave}
        onPress={handleUpdateProfile}
        disabled={loading}
      >
        <Text style={styles.textSave}>{loading ? 'Đang lưu...' : 'Save'}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textSave: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnSave: {
    borderRadius: 20,
    marginTop: 40,
    width: '100%',
    height: 50,
    backgroundColor: '#d17842',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eye: {
    width: 29,
    height: 18,
    position: 'absolute',
    top: 16,
    right: 13
  },
  input: {
    color: '#fff',
    width: '100%',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  input1: {
    color: '#828282',
    width: '100%',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  prest: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
    height: 50,
    marginTop: 20,
    borderRadius: 8
  },
  nguoimoi: {
    alignSelf: 'center',
    marginTop: 50
  },
  textpayment: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#0c0f14',
    paddingHorizontal: 20,
    paddingTop: 30
  }
});
