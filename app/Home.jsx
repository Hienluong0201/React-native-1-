import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState,useCallback  } from "react";
import { FlashList } from "@shopify/flash-list";
import AxiosInstance from "../helpers/AxiosInstance";



const DATA1 = [
  {
    id: 1,
    name: "Cappuccino",
    price: "4.20",
    description: "With Steamed Milk",
    image: require("../assets/images/camochino.png"),
    rating: "4.5",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "4.20",
    description: "With Steamed Milk",
    image: require("../assets/images/cf.png"),
    rating: "4.5",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: "4.20",
    description: "With Steamed Milk",
    image: require("../assets/images/coffebeans.png"),
    rating: "4.5",
  },
  {
    id: 4,
    name: "Cappuccino",
    price: "4.20",
    description: "With Steamed Milk",
    image: require("../assets/images/coffebeans.png"),
    rating: "4.5",
  },
];

const DATA2 = [
  {
    id: 1,
    name: "Robusta Beans",
    price: "4.20",
    description: "Medium Roasted",
    image: require("../assets/images/coffebeans.png"),
  },
  {
    id: 2,
    name: "Arabica Beans",
    price: "5.00",
    description: "Premium Roasted",
    image: require("../assets/images/coffebeans.png"),
  },
  {
    id: 3,
    name: "Liberica Beans",
    price: "4.50",
    description: "Dark Roasted",
    image: require("../assets/images/coffebeans.png"),

  },
];

const Home = () => {
 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance().get("/categories");
        if (response?.status && Array.isArray(response?.categories)) {
          const formattedCategories = response.categories.map((item) => ({
            id: item._id,
            title: item.name,
          }));
          setCategories(formattedCategories);
          console.log("📌 API Response:", response);
        } else {
          console.error("❌ Invalid API response format:", response);
        }
      } catch (error) {
        console.error("❌ API Error:", error);
      }
    };
    getCategories();
  }, []);
  
  
 const renderCategoryItem = useCallback(
     ({ item, index }) => (
       <TouchableOpacity
         onPress={() => setSelectedIndex(index)}
         style={styles.itemContainer}
       >
         <Text
           style={[
             styles.textitem,
             selectedIndex === index && { color: "#f17842" },
           ]}
         >
           {item.title}
         </Text>
         {selectedIndex === index && <View style={styles.circle}></View>}
       </TouchableOpacity>
     ),
     [selectedIndex]
   );
 

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      {/* Hiển thị đánh giá ở góc trên bên trái */}
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
      </View>
      {/* Ảnh sản phẩm */}
      <Image source={item.image} style={styles.productImage} />
      {/* Thông tin sản phẩm */}
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      {/* Footer sản phẩm */}
      <View style={styles.productFooter}>
      <Text style={styles.dola}>$</Text>
      
        <Text style={styles.productPrice}>{item.price}</Text>
        <View></View>
        <View></View>
        <View></View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderProductItem1 = ({ item }) => (
    <View style={styles.productCard}>
      {/* Ảnh sản phẩm */}
      <Image source={item.image} style={styles.productImage} />
      {/* Thông tin sản phẩm */}
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      {/* Footer sản phẩm */}
      <View style={styles.productFooter}>
        <Text style={styles.dola}>$</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View></View>
        <View></View>
        <View></View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    // Sử dụng ScrollView với chiều dọcapp/Home.js
    <View style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={require("../assets/images/Homeleft.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/images/Homeright.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.headerText}>Find the best</Text>
      <Text style={styles.headerText1}>coffee for you</Text>
      <View style={styles.imputcontainer}>
      
        <Image
          source={require("../assets/images/searchhome.png")}
          style={styles.search}
        />
          <TextInput
          style={styles.searchbox}
          placeholder="Find your coffee ..."
        />
      </View>
      <View style={styles.container1}>
        <View style={styles.flaslist1}>
        <FlashList
           data={categories}
           renderItem={renderCategoryItem}
           estimatedItemSize={50}
           horizontal
           showsHorizontalScrollIndicator={false}
           extraData={selectedIndex}
           keyExtractor={(item) => String(item.id)}
           contentContainerStyle={styles.categoryList}
          
        />
        </View>
        <View >
         <FlashList
          data={DATA1}
          renderItem={renderProductItem}
          estimatedItemSize={150}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        /> 
        </View>
        {/* Chỉnh lại vị trí "Coffee beans" */}
         <Text style={styles.Coffeebeans}>Coffee beans</Text> 
        <View> 

        <FlashList
          data={DATA2}
          renderItem={renderProductItem1}
          estimatedItemSize={150}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        /> 
        
        </View>
       
        
      </View>

     
     
    </ScrollView>
    <View style= {styles.containercuoi}>
            <Image
            style={styles.home}
            source={require("../assets/images/home.png")}
            />
            <Image
             source={require("../assets/images/shop.png")}
             style={styles.home}
             />
            <Image
             source={require("../assets/images/heart.png")}
             style={styles.home}
            />
            <Image
            source={require("../assets/images/notification.png")}
            style={styles.home}
            />
            </View>
    </View>
  );
  
};

export default Home;

const styles = StyleSheet.create({
  dola : {
      color : '#d17842',
      fontSize : 15,
      fontWeight : 16,
  },
  home :  {
    color : '#aeaeae',
    backgroundClip : '#fff'
  },
  flaslist1: {
    marginBottom : 10,
    marginTop : 20,
  },
  containercuoi : {
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-around',
    width : '100%',
    height : 89,
   
  },
  Coffeebeans: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20, // Tạo không gian cho "Coffee beans" không bị đè lên
    marginBottom: 10, // Tạo khoảng cách phía dưới
  },
  container: {
    flex: 1,
    backgroundColor: "#0c0f14",
    paddingLeft : 15,
    
  },
  container1: {
    flex: 1, // Bao hết toàn màn hình
    backgroundColor: "#0c0f14", // Màu nền đen
  },
  imagecontainer: {
    marginTop : 10,
    position: "absolute",
    top:  10,
    left: 4,
    right: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 28,
    lineHeight: 26,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 70,
  },
  headerText1: {
    fontSize: 28,
    lineHeight: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  imputcontainer: {
    marginTop: 28,
    width: "100%",
    right : 10,
    justifyContent : 'center',

  
  },
  searchbox: {
    backgroundColor: "#aeaeae",
    width: "100%",
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  search: {
    width: 20,
    height: 20,
    position: "absolute",
    right : 17
    
  },

  categoryList: {
    paddingVertical: 20,
    paddingHorizontal: 1,
  },
  itemContainer: {
   
    height: 20,
    alignItems: "center",
    marginHorizontal: 8,
  },
  textitem: {
    fontSize: 14,
    fontWeight: "700",
    color: "#aeaeae",
  },
  circle: {
    width: 10,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d17842",
    alignSelf: "center",
    marginTop: 4,
  },
  productCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    width: 150,
    height: 245,
    padding: 12,
    marginHorizontal: 10,
    position: "relative",
  },
  ratingContainer: {
    position: "absolute",
    top: 12,
    left: 10,
    backgroundColor: "#000000aa",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomLeftRadius: 20,    // Bo góc trái trên
    borderTopRightRadius: 5,
    zIndex: 10,
    left: 90,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 8,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 600,
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#d17842",
    width: 30,
    height: 30,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    justifyContent : 'center',
    alignItems : 'center',
  },
});

