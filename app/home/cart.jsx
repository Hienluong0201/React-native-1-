

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
const cart = () => {

    const router = useRouter();
  const sizes = ["S", "M", "L"];
  const sizes1 = ["S"];
  const pricePerItem = 4.20;
  const [quantities, setQuantities] = useState([
    sizes.map(() => 1),
    sizes.map(() => 1),
    sizes.map(() => 1),
    sizes.map(() => 1),
  ]);

  const updateQuantity = (productIndex, sizeIndex, delta) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((productQuantities, idx) =>
        idx === productIndex
          ? productQuantities.map((qty, i) =>
              i === sizeIndex ? Math.max(1, qty + delta) : qty
            )
          : productQuantities
      )
    );
  };

  const totalPrice = quantities.reduce(
    (sum, productQuantities) =>
      sum +
      productQuantities.reduce((productSum, qty) => productSum + qty * pricePerItem, 0),
    0
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.imagecontainer}>
        <Image source={require("../../assets/images/Homeleft.png")} style={styles.image} />
        <Text style={styles.textcart}>Cart</Text>
         <TouchableOpacity onPress={() => router.push('/edit_profile')}>
         <Image source={require("../../assets/images/Homeright.png")} style={styles.image} />
              </TouchableOpacity>
      
      </View>

      {/* Product 1 */}
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
            <Text style={styles.price}>${pricePerItem.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(0, index, -1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities[0][index]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(0, index, 1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Product 2 */}
      <View style={styles.container3}>
        <Image source={require("../../assets/images/capuchino1.png")} style={styles.image2} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Cappuccino</Text>
          <Text style={styles.description}>With Steamed Milk</Text>
          {sizes1.map((size, index) => (
            <View key={size} style={styles.row1}>
              <View style={styles.quantityContainer1}>
                <Text style={styles.sizeButton1}>{size}</Text>
                <Text style={styles.price2}>${pricePerItem.toFixed(2)}</Text>
              </View>
              <View style={styles.quantityContainer2}>
                <TouchableOpacity onPress={() => updateQuantity(1, index, -1)} style={styles.quantityButton}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantities[1][index]}</Text>
                <TouchableOpacity onPress={() => updateQuantity(1, index, 1)} style={styles.quantityButton}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Product 3 */}
      <View style={styles.container3}>
        <Image source={require("../../assets/images/capuchino1.png")} style={styles.image2} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Cappuccino</Text>
          <Text style={styles.description}>With Steamed Milk</Text>
          {sizes1.map((size, index) => (
            <View key={size} style={styles.row1}>
              <View style={styles.quantityContainer1}>
                <Text style={styles.sizeButton1}>{size}</Text>
                <Text style={styles.price2}>${pricePerItem.toFixed(2)}</Text>
              </View>
              <View style={styles.quantityContainer2}>
                <TouchableOpacity onPress={() => updateQuantity(2, index, -1)} style={styles.quantityButton}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantities[2][index]}</Text>
                <TouchableOpacity onPress={() => updateQuantity(2, index, 1)} style={styles.quantityButton}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Product 4 */}
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
            <Text style={styles.price}>${pricePerItem.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(3, index, -1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities[3][index]}</Text>
              <TouchableOpacity onPress={() => updateQuantity(3, index, 1)} style={styles.quantityButton}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Total */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.Price4}>Total Price</Text>
          <View style={styles.dola}>
            <Text style={styles.price3}>${totalPrice.toFixed(2)}</Text>
          </View>
        </View>
        <Link href={{ pathname: "/payment", params: { total: totalPrice.toFixed(2) } }}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>PAY</Text>
        </TouchableOpacity>
        </Link>
      </View>
    
    </ScrollView>
  );
};

export default cart;



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
  sizeButton1: {
    backgroundColor: "#111",
    color: "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 14,
    width: 40,
    right: 12,
    
  },
  price: {
    color: "#D17842",
    fontSize: 16,
    fontWeight: "bold",
  },
  price2: {
    color: "#D17842",
    fontSize: 16,
    fontWeight: "bold",
    left: 30,
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
  quantityContainer2: {
    flexDirection: "row",
    alignItems: "center",
   justifyContent : 'space-between',
   marginTop : 10,
  },
  quantityContainer1: {
    flexDirection: "row",
    alignItems: "center",
    left: 10,
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
