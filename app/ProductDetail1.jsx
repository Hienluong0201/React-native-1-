import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from "expo-router";
import AxiosInstance from "../helpers/AxiosInstance";

const ProductDetail1 = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState("S");

  const limitWords = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await AxiosInstance().get(`/products/${id}`);
        console.log("API Response:", response); // Kiểm tra dữ liệu
        if (response?.status && response?.product) {
          setProduct(response.product); // Lưu dữ liệu sản phẩm
        } else {
          console.error("Lỗi: Không tìm thấy sản phẩm");
        }
      } catch (error) {
        console.error("Lỗi API:", error);
      }
    };
  
    if (id) {
      fetchProduct();
    }
  }, [id]);
  
  if (!product || Object.keys(product).length === 0) { // Kiểm tra nếu sản phẩm chưa được load
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>Loading...</Text>
      </View>
    );
  }
  

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.cc}></View>
      <View style={styles.infoContainer}>
        <Text style={styles.productTitle}>   {limitWords(product.name, 2)}</Text>
        <Text style={styles.productOrigin}>From {product.origin}</Text>
        <View style={styles.sao}>
          <Image source={require("../assets/images/sao1.png")} style={styles.ngoisao} />
          <Text style={styles.productOrigin1}> {product.rating} {''}</Text>
          <Text style={styles.productOrigin2}>({product.reviews})</Text>
        </View>
      </View>
      <View style={styles.tagsContainer}>
        <View style={styles.tag}>
          <Image source={require("../assets/images/bean.png")} style={styles.bean} />
          <Text style={styles.tagText}>Bean</Text>
        </View>
        <View style={styles.tag}>
          <Image source={require("../assets/images/diachikebin.png")} style={styles.bean} />
          <Text style={styles.tagText}>Africa</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{product.description}</Text>
      </View>
      
      <Text style={styles.size}>SIZE</Text>
    <View style={styles.sizeContainer}>
      {/* Nếu không có sizes, có thể hiển thị thông tin khác hoặc ẩn đi */}
      {["S", "M", "L"].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.btnSize,
                {
                  borderColor: selectedSize === size ? "#C67C4E" : "#141921",
                },
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={{
                  color: selectedSize === size ? "#C67C4E" : "#AEAEAE",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
    </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.Price}>Price</Text>
          <View style={styles.dola}>
            <Text style={styles.tien}>$ {''}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail1;

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
    width: '100%',
    height: 490,
  },
  infoContainer: {
    position: 'absolute',
    top: 370,
    left: 20,
  },
  productTitle: {
    right:20,
    fontSize: 20,
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
    marginTop: 90,
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
});
