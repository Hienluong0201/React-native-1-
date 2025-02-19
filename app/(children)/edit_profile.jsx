import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, TouchableOpacity,Modal } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router'

const edit_profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(false); // Đóng modal
    console.log("Đã đăng xuất!"); // Xử lý đăng xuất tại đây
  };


    const router = useRouter();
  return (
    <View style={styles.container}>
       <View style={styles.back}>
           <TouchableOpacity onPress={() => router.push('/home/cart')}>
           <Image onPress={() => router.push('/home/cart')} source={require('../../assets/images/backk.png')} />
            </TouchableOpacity>
            <Text style={styles.textpayment}> Setting</Text>
            <View></View>
            <View></View>
           </View>
       <TouchableOpacity
       onPress={() => router.push('/profile')}
       style={styles.prest}>
        <View style={styles.botron}>
        <Image
        source={require('../../assets/images/nguoi.png')}
        />
       
        </View>
        <Text style={styles.text}> Personal Details</Text>
        <View></View>
        <View></View>
        <View></View>
        <Image
        source={require('../../assets/images/baaack.png')}
        style={styles.baaack}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.prest1}>
        <View style={styles.botron}>
        <Image
        source={require('../../assets/images/dinhvi.png')}
        />
       
        </View>
        <Text style={styles.text}>Address</Text>
        <View></View>
        <View></View>
        <View></View>
        <Image
        source={require('../../assets/images/baaack.png')}
        style={styles.baaack}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.prest1}>
        <View style={styles.botron}>
        <Image
        source={require('../../assets/images/payyy.png')}
        />
       
        </View>
        <Text style={styles.text}>Payment Method</Text>
        <View></View>
        <View></View>
        <View></View>
        <Image
        source={require('../../assets/images/baaack.png')}
        style={styles.baaack}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.prest1}>
        <View style={styles.botron}>
        <Image
        source={require('../../assets/images/iii.png')}
        />
       
        </View>
        <Text style={styles.text}>About </Text>
        <View></View>
        <View></View>
        <View></View>
        <Image
        source={require('../../assets/images/baaack.png')}
        style={styles.baaack}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.prest1}>
        <View style={styles.botron}>
        <Image
        source={require('../../assets/images/chamhoi.png')}
        />
       
        </View>
        <Text style={styles.text}>Help </Text>
        <View></View>
        <View></View>
        <View></View>
        <Image
        source={require('../../assets/images/baaack.png')}
        style={styles.baaack}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.prest1} onPress={() => setModalVisible(true)}>
        <View style={styles.botron}>
          <Image source={require('../../assets/images/logout.png')} />
        </View>
        <Text style={styles.text}>Log out</Text>
        <View></View>
        <View></View>
        <View></View>
        <Image source={require('../../assets/images/baaack.png')} style={styles.baaack} />
        
      </TouchableOpacity>

      {/* Modal Xác Nhận Logout */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure want to logout!</Text>

            {/* Nút No & Yes */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.button, styles.noButton]}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.yesButton]}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default edit_profile

const styles = StyleSheet.create({
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { backgroundColor: 'white', padding: 25, borderRadius: 12, alignItems: 'center', width: 280 },
  modalText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  button: { flex: 1, padding: 12, borderRadius: 8, alignItems: 'center', marginHorizontal: 5 },
  noButton: { backgroundColor: '#ccc' },
  yesButton: { backgroundColor: '#d9534f' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  baaack: {
   
   
  },
  text: {
    color : '#fff',
    fontSize : 16,
    fontWeight : '500',
    marginLeft : 20
  },
  botron: { 
   width: 30,
    height: 30,
    borderRadius : 30,
    backgroundColor : '#fff',
    justifyContent : 'center',
    alignItems : 'center',
  },
  prest: {
    justifyContent : 'space-between',
   alignItems : 'center',
    flexDirection : 'row',
    marginTop : 40,
    width : '100%',
    height : 50,
   

  },
  prest1: {
    justifyContent : 'space-between',
    alignItems : 'center',
     flexDirection : 'row',
     marginTop : 10,
     width : '100%',
     height : 50,
     
 
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