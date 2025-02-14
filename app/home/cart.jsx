import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import  { useState } from "react";

const cart = () => {
  const sizes = ["S", "M", "L"];
  const sizes1 = ["S"];
  const [quantities, setQuantities] = useState(sizes.map(() => 1));

  const updateQuantity = (index, delta) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? Math.max(1, qty + delta) : qty))
    );
  };
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagecontainer}>
           <Image
           source={require("../../assets/images/Homeleft.png")}
           style={styles.image}
           />
           <Text style={styles.textcart}>Cart</Text>
            <Image
           source={require("../../assets/images/Homeright.png")}
           style={styles.image}
           />
     </View>
       <View style={styles.container1}>
        <View style={styles.container2}>
      <Image source={require("../../assets/images/capuchino1.png")} style={styles.image1} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Cappuccino</Text>
        <Text style={styles.description}>With Steamed Milk</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Medium Roasted</Text>
        </View>
        </View>                        
        </View>
        {sizes.map((size, index) => (
          
          <View key={size} style={styles.row}>
            <Text style={styles.sizeButton}>{size}</Text>
            <Text style={styles.price}>$ 4.20</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(index, -1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities[index]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(index, 1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      
       </View>

       <View style={styles.container3}>
        <Image source={require("../../assets/images/capuchino1.png")} style={styles.image2} />
        <View style={styles.detailsContainer}>
        <Text style={styles.title}>Cappuccino</Text>
        <Text style={styles.description}>With Steamed Milk</Text>
        <View>
          {sizes1.map((size, index) => (
          <View key={size} style={styles.row}>
            <Text style={styles.sizeButton}>{size}</Text>
            <Text style={styles.price}>$ 4.20</Text>
          </View>
        ))}
        </View>
        <View>
          {sizes1.map((size, index) => (
          <View key={size} style={styles.row1}>
             <View style={styles.quantityContainer1}>
              <TouchableOpacity onPress={() => updateQuantity(index, -1)} style={styles.quantityButton1}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText1}>{quantities[index]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(index, 1)} style={styles.quantityButton2}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        </View>

        </View>
        </View>  
        <View style={styles.container3}>
        <Image source={require("../../assets/images/capuchino1.png")} style={styles.image2} />
        <View style={styles.detailsContainer}>
        <Text style={styles.title}>Cappuccino</Text>
        <Text style={styles.description}>With Steamed Milk</Text>
        <View>
          {sizes1.map((size, index) => (
          <View key={size} style={styles.row}>
            <Text style={styles.sizeButton}>{size}</Text>
            <Text style={styles.price}>$ 4.20</Text>
          </View>
        ))}
        </View>
        <View>
          {sizes1.map((size, index) => (
          <View key={size} style={styles.row1}>
             <View style={styles.quantityContainer1}>
              <TouchableOpacity onPress={() => updateQuantity(index, -1)} style={styles.quantityButton1}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText1}>{quantities[index]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(index, 1)} style={styles.quantityButton2}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        </View>

        </View>
        </View>  
        <View style={styles.container1}>
        <View style={styles.container2}>
      <Image source={require("../../assets/images/capuchino1.png")} style={styles.image1} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Cappuccino</Text>
        <Text style={styles.description}>With Steamed Milk</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Medium Roasted</Text>
        </View>
        </View>                        
        </View>
        {sizes.map((size, index) => (
          
          <View key={size} style={styles.row}>
            <Text style={styles.sizeButton}>{size}</Text>
            <Text style={styles.price}>$ 4.20</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(index, -1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities[index]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(index, 1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      
       </View>
       <View style={styles.footer}>
                           <View>
                             <Text style={styles.Price4}>Total Price</Text>
                             <View style={styles.dola}>
                             
                           <Text style={styles.price3}> $ 4.20</Text>
                           </View>
                           </View>
                           <TouchableOpacity style={styles.addToCartButton}>
                             <Text style={styles.addToCartText}>PAY</Text>
                           </TouchableOpacity>
                         </View> 
    </ScrollView>
  )
}

export default cart

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
    top: 30,
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
  container3: {
    top: 50,
    flexDirection: 'row',
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  container2: {
   flexDirection : 'row',
   
  },
  container1: {
    
    top: 50,
    flexDirection: "1",
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  image1: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  image2: {
    width: 126,
    height: 126,
    borderRadius: 12,
  },
  detailsContainer: {
    
    flex: 1,
    marginLeft: 40,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#A1A1A1",
    fontSize: 14,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  row1: {
   

    marginTop: 12,
  },
  sizeButton: {
    
    backgroundColor: "#111",
    color: "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    width: 40,
    
  },
  price: {
    color: "#D17842",
    fontSize: 16,
    fontWeight: "bold",
  },
  price1: {
    left: 13,
    width: 40,
    alignItems: 'center',
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
   
  },
  quantityContainer1: {
    flexDirection: "row",
    alignItems: "center",
  },
  
  quantityButton: {
    backgroundColor: "#D17842",
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  quantityButton1: {
    left: 2 ,
    backgroundColor: "#D17842",
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  quantityButton2: {
    backgroundColor: "#D17842",
    width: 28,
    height: 28,
    left: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  quantityText1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
    left: 25,
  },
  textcart : {
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold'
  },
  imagecontainer : {
    position :'absolute',
    top :0,
    left : 0,
    right : 0,
    flexDirection : 'row',
    justifyContent : 'space-between',
   
  },
  container : {
    flex : 1,
    backgroundColor : '#0c0f14',
    paddingHorizontal : 30,
    paddingTop : 30
  }
})