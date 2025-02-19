import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { useState } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNotifications } from '../../app-context/index';

const payment = () => {



    const router = useRouter();
    const { total } = useLocalSearchParams(); // Nhận giá trị total từ URL
    const { addNotification } = useNotifications();

    const [loading, setLoading] = useState(false);


  //   const handlePayment = () => {
  //     // Thêm thông báo vào danh sách
  //     // Thêm thông báo vào danh sách
  //   addNotification('Bạn đã thanh toán thành công!');
  //   console.log("Thanh toán thành công!");  // Đảm bảo hàm này được gọi
  //   addNotification('Bạn đã thanh toán thành công!');
  //   console.log("Thông báo đã được thêm vào context!"); 
  //     // Hiển thị thông báo tạm thời
  //     // Toast.show({
  //     //     type: 'success',
  //     //     text1: 'Thanh toán',
  //     //     text2: 'Bạn đã thanh toán thành công!',
  //     // });

  //     // Chuyển hướng đến trang Notification
  //     router.push('/home/notification');
  // };
  const handlePayment = () => {
    // Thêm thông báo vào danh sách
    console.log('Thêm thông báo mới: Bạn đã thanh toán thành công!');
    addNotification('Bạn đã thanh toán thành công!');
    console.log("Thanh toán thành công!");  // Log để đảm bảo hàm này được gọi
    
    // Chuyển hướng đến trang Notification
    router.push('/home/notification');
};
    
 

  return (
    <View style={styles.container}> 
     <View style={styles.back}>
     <TouchableOpacity onPress={() => router.push('/home/cart')}>
     <Image onPress={() => router.push('/home/cart')} source={require('../../assets/images/backk.png')} />
      </TouchableOpacity>
     
      
      <Text style={styles.textpayment}> Payment</Text>
      <View></View>
      <View></View>
     </View>
     <View style={styles.createcarf}>
      <Text style={styles.textceartcard}> Creart Card </Text>
      <Image
       source={require('../../assets/images/carttt.png')}
       style={styles.carttt}
       />
     </View>
     <View style={styles.createcar2}>
      <Image
      source={require('../../assets/images/viii.png')}
      style={styles.viii}
      />
      <Text style={styles.textviii}> Wallet</Text>
      <Text style={styles.textviii1}> $ 100.50</Text>
     </View>
     <View style={styles.createcar2}>
      <Image
      source={require('../../assets/images/gggggg.png')}
      style={styles.viii}
      />
      <Text style={styles.textviii}> Google Pay</Text>
     
     </View>
     <View style={styles.createcar2}>
      <Image
      source={require('../../assets/images/appp.png')}
      style={styles.viii1}
      />
      <Text style={styles.textviii}> Apple Pay</Text>
     
     </View>
     <View style={styles.createcar2}>
      <Image
      source={require('../../assets/images/amaaa.png')}
      style={styles.viii1}
      />
      <Text style={styles.textviii}> Amazon Pay</Text>
     
     </View>
          <View style={styles.footer}>
             <View>
               <Text style={styles.Price4}>Total Price</Text>
               <View style={styles.dola}>
                
                 <Text style={styles.price3}>${total}</Text>
               </View>
             </View>
            
             <TouchableOpacity 
        onPress={handlePayment} 
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartText}>PAY</Text>
      </TouchableOpacity>
             
           </View>
         
    </View>
  )
}

export default payment

const styles = StyleSheet.create({
  tien : {
    color : '#d17842',
    size : 20,
    top : 0,
    lineHeight : 20,
  },
  dola:{
    flexDirection : 'row',
    alignContent : 'center',
  },
  Price : {
  color : '#aeaeae',
  left : 16,
  },
  footer: {
    top: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    marginTop: 20,
  },
  price3: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  Price4: {
    fontSize: 12,
    color: '#aeaeae',
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#ff7843',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  viii1: {
   
    marginLeft : 20
  },
  viii: {
    width : 25,
    height : 20,
    marginLeft : 20
  },
 textviii: {
    color : '#fff',
    fontSize : 14,
    fontWeight : '600',
    marginLeft : 20
  },
  textviii1: {
    color : '#fff',
    fontSize : 14,
    marginLeft : 170
  },
  createcar2: {
    backgroundColor : '#1e2328',
    width : '100%',
    height : 50,
    marginTop : 20,
    borderRadius : 20,
    flexDirection : 'row',
    alignItems : 'center',
  },
  carttt: {
    width : 320,
    height : 186,
    marginTop : 15,
    marginLeft : 13
  },
  textceartcard: {
    color : '#fff',
    fontSize : 16,
    fontWeight : '600',
    marginLeft : 13,
    top : 10
    
  },
  createcarf: {
    backgroundColor : '#1e2328',
    borderRadius : 20,
    width : '100%',
    height : 241,
    borderWidth : 2,
    borderColor : '#d17842',
  },
  textpayment: {
    color : '#fff',
    fontSize : 20,
    fontWeight : 'bold',
    marginLeft : 20
  },
  back: {
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 20,

    justifyContent : 'space-between'

  },
  container: {
    flex : 1,
    backgroundColor : '#0c0f14',
    paddingHorizontal : 20,
    paddingTop : 30
  }
})