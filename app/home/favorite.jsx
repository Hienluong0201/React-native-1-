import { StyleSheet, Text, View, Image, ActivityIndicator,TouchableOpacity} from 'react-native'
import React from 'react'
import AxiosInstance from '../../helpers/AxiosInstance'
import { useState, useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'

const favorite = () => {
  const [products, setProducts] = useState([]); // Lưu danh sách sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Lưu lỗi

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await AxiosInstance().get('/products?category=65b07ddcfc13ae4836b4cb08');
        console.log("API response:", response); // Log toàn bộ phản hồi API
  
        if (response.products) {
          console.log("Sản phẩm từ API:", response.products); // Log mảng sản phẩm
          setProducts(response.products); // Set dữ liệu vào state
        } else {
          console.log("Không có sản phẩm hoặc API trả về dữ liệu không hợp lệ.");
        }
      } catch (err) {
        console.log("Lỗi khi gọi API:", err); // Log lỗi
        setError(err.message); // Lưu lỗi vào state
      } finally {
        setLoading(false); // Đặt trạng thái loading là false
      }
    };
  
    fetchProducts();
  }, []);
  

  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error) return <Text>Error: {error?.message}</Text>; // ✅ Sửa lỗi ở đây

  const rendercatigory = ({ item }) => {
    console.log("item neffff", item);
    return (
      
      <View style={styles.productCard}>
        <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        />
         <View style = { styles.cc}> 
        </View>
        {/* Thông tin tên và nguồn gốc */}
              <View style={styles.infoContainer}>
                <Text style={styles.productTitle}>{item.name.length > 10 ? item.name.slice(0, 10) + '...' : item.name}</Text>
                <Text style={styles.productOrigin}>From Africa</Text>
                <View style={styles.sao} >
                  <Image
                  source={require("../../assets/images/sao1.png")}
                  style={styles.ngoisao}
                  />
                <Text style={styles.productOrigin1}> {item.rating} {''}</Text>
                <Text style={styles.productOrigin2}>({item.voting})</Text>
                </View>
              </View>
              {/* Thẻ mô tả */}
            <View style={styles.tagsContainer}>
                  <View style={styles.tag}>
                  <Image
                  source={require("../../assets/images/bean.png")}
                  style = {styles.bean}
                  />
                    <Text style={styles.tagText}>Bean</Text>
                 
                  </View>
                  <View style={styles.tag}>
                  <Image
                  source={require("../../assets/images/diachikebin.png")}
                  style = {styles.bean}
                  />
                    <Text style={styles.tagText}>Africa</Text></View>
                </View>
                  <View style={styles.tagsContainer1}>
                        <View style={styles.tag1}>
                      <Text style={styles.tagText}> Medium Roasted</Text>
                      </View>
                      
                      </View>
                       <View style={styles.descriptionContainer}>
                              <Text style={styles.descriptionTitle}>Description</Text>
                              <Text style={styles.descriptionText}>
                                {item.description}
                              </Text>
                            </View>
      </View>
     
    );
  };  


  return (
    <View style={styles.container}> 
    <View style={styles.imagecontainer}>
               <Image
               source={require("../../assets/images/Homeleft.png")}
               style={styles.image}
               />
               <Text style={styles.textcart}>Favorite</Text>
                <Image
               source={require("../../assets/images/Homeright.png")}
               style={styles.image}
               />
   </View>
   


      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={rendercatigory}
         
      />
    </View>
  )
}

export default favorite

const styles = StyleSheet.create({
 
  tagText: {
    fontSize: 12,
    color: '#aeaeae',
  },
  bean : {
    width : 31,
    height : 31,

  },
  tag: {
    
    backgroundColor: '#282c35',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10, // Khoảng cách giữa các thẻ
    marginHorizontal : 10
  },
  tagsContainer: {
    position: 'absolute',
    flexDirection : 'row',
    justifyContent : 'space-between',
    top: 360, // Điều chỉnh vị trí theo hình
    right: 20, // Đẩy về bên phải
    alignItems: 'flex-start',

  },
  productOrigin2: {
    fontSize: 10,
    color: '#aeaeae',
    marginTop: 10,
  },
  productOrigin1: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
    fontWeight : 'bold'
  },
  ngoisao : {
    top : 2
  },
  sao : {
    flexDirection : 'row',
    
    top : 18
   },
  productOrigin: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    position: 'absolute',
    top: 370,
    left: 20,
  },
  cc : {
    top : 340,
    width : '100%',
    height : 150,
    position : 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
},
 
  productImage: {
    borderTopLeftRadius: 10,  // Bo góc trên bên trái
    borderTopRightRadius: 10, // Bo góc trên bên phải
    marginTop : 30,
    width: 350,
    height: 457,
    
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
  },
  descriptionContainer: {
    borderBottomLeftRadius: 10,  // Bo góc dưới bên trái
    borderBottomRightRadius: 10, // Bo góc dưới bên phải
    backgroundColor : '#262b33',
    width : 350
  },
  descriptionTitle: {
    fontSize: 14,
    lineHeight : 20,
    color: '#aeaeae',
    fontWeight: 'bold',
    marginTop : 20,
    left : 20,
  },
  descriptionText: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight : 20,
    marginTop: 8,
    lineHeight: 20,
    margin : 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginHorizontal: 5,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: '#bbb',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  imagecontainer : {
    top :30,
    left : 10,
    right : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : '93%',
    height : 80,
    },
  textcart : {
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold'
  },
 
  container : {
    flex : 1,
    backgroundColor : '#0c0f14',
    paddingHorizontal : 19,
    paddingTop : 30
  }
})