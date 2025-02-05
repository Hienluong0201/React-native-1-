import { StyleSheet, Text, View,Image ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     
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
      <Text style={styles.headerText}>
          Find the best     
     </Text>
     <Text style={styles.headerText1}>
          coffe for you    
     </Text>
     <View style={styles.imputcontainer}>
      <TextInput 
      style={styles.searchbox} 
      placeholder='Find your coffe ...'

      />
      <Image
      source={require("../assets/images/searchhome.png")}
      style={styles.search}
      />
     </View>
     <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}
      >
       <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Espresso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Americano</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Macchiato</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.mainScroll}
      showsVerticalScrollIndicator={false} 
      >
      <ScrollView 
  style={styles.content} 
  horizontal={true} // Lướt ngang
  showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
>
  <View style={styles.productContainer}>
    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/capuchino.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Cappuccino</Text>
      <Text style={styles.productDescription}>With Steamed Milk</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/capuchino1.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Cappuccino</Text>
      <Text style={styles.productDescription}>With Foam</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/capuchino.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Cappuccino</Text>
      <Text style={styles.productDescription}>With Foam</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/capuchino1.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Cappuccino</Text>
      <Text style={styles.productDescription}>With Foam</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
      </ScrollView>
    <Text style={styles.coffebean}>Coffee beans</Text>
    <ScrollView 
  style={styles.content} 
  horizontal={true} // Lướt ngang
  showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
>
  <View style={styles.productContainer}>
    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/coffebeans.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Robusta Beans</Text>
      <Text style={styles.productDescription}>Medium Roasted</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/coffebeans.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Cappuccino</Text>
      <Text style={styles.productDescription}>With Steamed Milk</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/coffebeans.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Cappuccino</Text>
      <Text style={styles.productDescription}>With Foam</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.productCard}>
      <Image
        source={require("../assets/images/capuchino1.png")}
        style={styles.productImage}
      />
      <Text style={styles.productTitle}>Cappuccino</Text>
      <Text style={styles.productDescription}>With Foam</Text>
      <View style={styles.productFooter}>
        <Text style={styles.productPrice}>$4.20</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  </ScrollView>
      </ScrollView>
      <View style= {styles.containercuoi}>
      <Image
      source={require("../assets/images/home.png")}
      />
      <Image
       source={require("../assets/images/shop.png")}
       />
      <Image
       source={require("../assets/images/heart.png")}
      />
      <Image
      source={require("../assets/images/notification.png")}
      />
      </View>
       
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 
  containercuoi : {
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-around',
    width : '100%',
    height : 50
  },
  coffebean : {
    color : '#fff',
    fontSize : 16,
    marginTop : 23
  },
  productContainer: {
    flexDirection: "row", // Hiển thị các thẻ sản phẩm nằm ngang
    marginTop: 20,
    alignItems: "center",
  },
  productCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    width: 150,
    height : 245, // Đặt chiều rộng cố định phù hợp để dễ nhìn khi lướt ngang
    padding: 12,
    marginHorizontal: 10, // Khoảng cách giữa các thẻ
  },
  
  productImage: {

    width: '100%',
    height: 126,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover"
  },
  
  productTitle: {
    fontSize: 13,
    lineHeight : 20,
    fontWeight: "bold",
    color: "#fff",
  },
  
  productDescription: {
    fontSize: 14,
    color: "#aaa",
    marginVertical: 5,
  },
  
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  
  addButton: {
    backgroundColor: "#FF7F50",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  
  addButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  sectionTitle : {
    fontSize : 18,
    color : '#fff',
    
  },
  content : {
    marginTop : 20
  },
  scrollContainer: {
    marginTop : 28,
    width : '100%',
    height : 34
   
  },
  menuItem: {
    width : 'auto',
    height : 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 19, // Khoảng cách giữa các mục
    alignItems : 'center',
    textAlign : 'center',
    justifyContent : 'center'
  },
  menuText: {
    color: '#fff',
    fontSize: 14,
    lineHeight : 20
  },

  search : { 
    width : 20,
    height : 20,
    position : 'absolute',
    top : 13,
    right : 13
  },
  searchbox : {
    backgroundColor : '#fff',
    width : '100%',
    height : 45,
    borderRadius : 15,
    paddingHorizontal : 16,
    paddingVertical : 12

  },
  imputcontainer : {
    marginTop : 28,
    width : '100%'
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
headerText :{
  fontSize : 28,
  lineHeight : 26,
  fontWeight : 'bold',
  color : '#fff',
  marginTop : 45
  },
headerText1 :{
  fontSize : 28,
  lineHeight : 26,
  fontWeight : 'bold',
  color : '#fff',
  
  },
container : {
  flex : 1,
  backgroundColor : '#0c0f14',
  paddingHorizontal : 30,
  paddingTop : 30
}

})