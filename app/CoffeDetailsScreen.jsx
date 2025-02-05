import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native'
import React from 'react'

const CoffeDetailsScreen = () => {
  return (
    <View  style={styles.container}>
        <Image source={require('../assets/images/anhcoffe.png')}
         style={styles.productImage} />
        
     
        
         <View style={styles.imagecontainer}>
               <Image
               source={require("../assets/images/back.png")}
               style={styles.image}
               />
                <Image
               source={require("../assets/images/love1.png")}
               style={styles.image}
               />
          </View>
           
           <View style = { styles.cc}> 

           </View>

           
  
            <View style={styles.infoContainer}>
                
            <Text style={styles.productTitle}>Cappuccino</Text>
            <Text style={styles.productOrigin}>With Steamed Milk</Text>
            <View style={styles.sao} >
              <Image
              source={require("../assets/images/sao1.png")}
              style={styles.ngoisao}
              />
            <Text style={styles.productOrigin1}> 4.5 {''}</Text>
            <Text style={styles.productOrigin2}>(6.879)</Text>
            </View>
          </View>  
            <View style={styles.tagsContainer}>
            <View style={styles.tag}>
            <Image
            source={require("../assets/images/Group 19.png")}
            style = {styles.bean}
            />
              <Text style={styles.tagText}>Coffee</Text>
           
            </View>
            <View style={styles.tag}>
            <Image
            source={require("../assets/images/drop.png")}
            style = {styles.bean}
            />
              <Text style={styles.tagText}>Milk</Text></View>
        </View>
         <View style={styles.tagsContainer1}>
                <View style={styles.tag1}>
              <Text style={styles.tagText}> Medium Roasted</Text>
              </View>
              </View>
             




        <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>
                Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.
                </Text>
              </View>
              <Text style = {styles.size}>
                Size
              </Text>
         <View style={styles.sizeContainer}>
                <TouchableOpacity style={[styles.sizeOption, styles.sizeOptionSelected]}>
                  <Text style={styles.sizeText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeOption}>
                  <Text style={styles.sizeText}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeOption}>
                  <Text style={styles.sizeText}>L</Text>
                </TouchableOpacity>
              </View> 
             <View style={styles.footer}>
                    <View>
                      <Text style={styles.Price}>Price</Text>
                      <View style={styles.dola}>
                       <Text style={styles.tien}>
                        $ {''}
                       </Text>
                    <Text style={styles.price}>4.20</Text>
                    </View>
                    </View>
                    <TouchableOpacity style={styles.addToCartButton}>
                      <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>  
    </View>
  )
}

export default CoffeDetailsScreen

const styles = StyleSheet.create({
  cc : {
        top : 342,
        width : '100%',
        height : '19%',
        position : 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
  },
    image : {
        width : 30,
        height : 30
      },
    imagecontainer : {
      position :'absolute',
      top :30,
      left : 30,
      right : 30,
      flexDirection : 'row',
      justifyContent : 'space-between',
     
    },
    ngoisao : {
        top : 2
      },
      tien : {
        color : '#d17842',
        size : 20,
        top : 5,
        lineHeight : 20,
      },
      dola:{
        flexDirection : 'row'
      },
      Price : {
    color : '#aeaeae',
    left : 16,
      },
      size : {
        fontSize : 14,
        lineHeight : 20,
        color : '#aeaeae',
        left : 20,
        top : 27,
        fontWeight : 'bold'
      },
     sao : {
      flexDirection : 'row',
      
      top : 18
     },
      bean : {
        width : 31,
        height : 31,
    
      },
      container: {
        flex: 1,
        backgroundColor: '#0c0f14',
      },
      productImage: {
        width: 390,
        height: 490,
      },
      infoContainer: {
        position: 'absolute',
        top: 370,
        left: 20,
      },
      productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
      },
      productOrigin: {
        fontSize: 14,
        color: '#aeaeae',
        marginTop: 4,
      },
      productOrigin1: {
        fontSize: 16,
        color: '#fff',
        marginTop: 4,
        fontWeight : 'bold'
      },
      productOrigin2: {
        fontSize: 10,
        color: '#aeaeae',
        marginTop: 10,
        
        
      },
      tagsContainer: {
        position: 'absolute',
        flexDirection : 'row',
        justifyContent : 'space-between',
        top: 360, // Điều chỉnh vị trí theo hình
        right: 20, // Đẩy về bên phải
        alignItems: 'flex-start',
    
      },
      tagsContainer1: {
        position: 'absolute',
        flexDirection : 'row',
        justifyContent : 'space-between',
        top: 430, // Điều chỉnh vị trí theo hình
        right: 20, // Đẩy về bên phải
        alignItems: 'flex-start',
    
      },
      tag: {
        
        backgroundColor: '#282c35',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 10, // Khoảng cách giữa các thẻ
        marginHorizontal : 10
      },
      tag1: {
        width : 131,
        height : 44,
        backgroundColor: '#282c35',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 10, // Khoảng cách giữa các thẻ
        marginHorizontal : 10,
        justifyContent : 'center',
        alignItems : 'center'
      },
      tagText: {
        fontSize: 12,
        color: '#aeaeae',
        left : 2,
      },
      descriptionContainer: {
        marginHorizontal: 20,
        marginTop: 20,
      },
      descriptionTitle: {
        fontSize: 14,
        lineHeight : 20,
        color: '#aeaeae',
        fontWeight: 'bold',
      },
      descriptionText: {
        fontSize: 12,
        color: '#ffffff',
        lineHeight : 20,
        marginTop: 8,
        lineHeight: 20,
      },
      sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        marginHorizontal: 5,
      },
      sizeOption: {
        borderWidth: 1,
        borderColor: '#bbb',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
      },
      sizeOptionSelected: {
        backgroundColor: '#ff7843',
        borderColor: '#ff7843',
      },
      sizeText: {
        fontSize: 14,
        color: '#fff',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      price: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
      },
      addToCartButton: {
        backgroundColor: '#ff7843',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 10,
      },
      addToCartText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
})