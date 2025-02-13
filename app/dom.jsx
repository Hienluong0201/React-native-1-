import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import AxiosInstance from "../helpers/AxiosInstance";

const dom = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Lấy danh sách danh mục từ API
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance().get("/categories");
        console.log("📌 API Categories Response:", response);

        if (response?.status && Array.isArray(response?.categories)) {
          const formattedCategories = response.categories.map((item) => ({
            id: item._id,
            title: item.name,
          }));

          console.log("📌 Danh mục sau khi xử lý:", formattedCategories);
          setCategories(formattedCategories);

          if (formattedCategories.length > 0) {
            getProductsByCategory(formattedCategories[0]?.id);
          }
        } else {
          console.error("❌ Invalid API response format:", response);
        }
      } catch (error) {
        console.error("❌ API Error:", error);
      }
    };
    getCategories();
  }, []);

  // Lấy sản phẩm theo danh mục
  const getProductsByCategory = async (categoryId) => {
    if (!categoryId) {
      console.error("❌ Lỗi: categoryId bị undefined hoặc null");
      return;
    }
    try {
      const response = await AxiosInstance().get(`/products?category=${categoryId}`);
      console.log("📌 API Products Response:", response);
      if (response?.status && Array.isArray(response?.products)) {
        setProducts(response.products);
      } else {
        console.error("❌ Invalid products response:", response);
      }
    } catch (error) {
      console.error("❌ API Error:", error);
    }
  };

  // Gọi API khi thay đổi danh mục
  useEffect(() => {
    if (categories.length > 0 && categories[selectedIndex]) {
      getProductsByCategory(categories[selectedIndex]?.id);
    }
  }, [selectedIndex, categories]);

  // Xử lý chọn danh mục
  const handleCategoryPress = (index) => {
    console.log("Danh mục được chọn:", index); 
    setSelectedIndex(index);
  };

  const rendercatigory = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleCategoryPress(index)}
    >
      <Text
        style={[
          styles.textitem,
          {
            color: index === selectedIndex ? "#d17842" : "#aeaeae",
          },
        ]}
      >
        {item.title}
      </Text>
      {index === selectedIndex && <View style={styles.circle} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Tiêu đề */}
        <Text style={styles.headerText}>Find the best</Text>
        <Text style={styles.headerText1}>coffee for you</Text>

        {/* Ô tìm kiếm */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.searchbox} placeholder="Find your coffee ..." />
        </View>

        {/* Danh sách danh mục */}
        {categories.length > 0 && (
          <FlashList
            data={categories}
            renderItem={rendercatigory}
            estimatedItemSize={50}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
            extraData={selectedIndex}
          />
        )}

        {/* Danh sách sản phẩm */}
        {products.length > 0 && (
          <FlashList
            data={products}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                {/* Hiển thị đánh giá */}
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>

                {/* Ảnh sản phẩm */}
                <Image source={{ uri: item.image }} style={styles.productImage} />

                {/* Thông tin sản phẩm */}
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={styles.productDescription}  numberOfLines={3}>{item.description}</Text>

                {/* Footer sản phẩm */}
                <View style={styles.productFooter}>
                  <Text style={styles.dola}>$</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            estimatedItemSize={150}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id.toString()}
          />
        )}

    <Text style={styles.Coffeebeans}>Coffee beans</Text> 
        {products.length > 0 && (
          <FlashList
            data={products}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                {/* Hiển thị đánh giá */}
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>

                {/* Ảnh sản phẩm */}
                <Image source={{ uri: item.image }} style={styles.productImage} />

                {/* Thông tin sản phẩm */}
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={styles.productDescription}  numberOfLines={3}>{item.description}</Text>

                {/* Footer sản phẩm */}
                <View style={styles.productFooter}>
                  <Text style={styles.dola}>$</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            estimatedItemSize={150}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item._id.toString()}
          />
        )}
      </ScrollView>
              
      
    </View>
  );
};

export default dom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0f14",
    paddingLeft: 15,
  },
  circle: {
    width: 10,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d17842",
    alignSelf: "center",
    marginTop: 4,
  },
  Coffeebeans: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 70,
  },
  headerText1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  inputContainer: {
    marginTop: 28,
    width: "100%",
    justifyContent: "center",
  },
  searchbox: {
    backgroundColor: "#aeaeae",
    width: "100%",
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 16,
  },
  itemContainer: {
    marginVertical: 10,
    height: 30,
    alignItems: "center",
    marginHorizontal: 8,
  },
  textitem: {
    fontSize: 14,
    fontWeight: "700",
    color: "#aeaeae",
  },
  productCard: {
    height: 250,
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    width: 150,
    padding: 12,
    marginHorizontal: 10,
    position: "relative",
  },
  ratingContainer: {
    position: "absolute",
    top: 12,
    right: 10, // Thay vì `left: 90`
    backgroundColor: "#000000aa",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 5,
    zIndex: 10,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  productImage: {
    width: "100%",
    height: 100,
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
    fontWeight: "600", // Sửa lỗi fontWeight
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#f17842",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dola: {
    color: "#f17842",
    fontSize: 16,
    fontWeight: "bold",
  },
});

