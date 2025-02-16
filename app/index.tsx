import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router"; // Thay Redirect bằng useRouter
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../app-context/index"; // Đảm bảo đường dẫn đúng

export default function Index() {
  const [loading, setLoading] = useState(true);
  const { isAuth } = useContext(AppContext); // Lấy giá trị isAuth từ context
  const router = useRouter(); // Khởi tạo router để điều hướng

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (isAuth) {
        router.push("/home");  // Điều hướng đến trang home nếu đã đăng nhập
      } else {
        router.push("/Login");  // Điều hướng đến trang Login nếu chưa đăng nhập
      }
    }
  }, [loading, isAuth, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Image source={require('../assets/images/logomoi.png')} style={{ width: 100, height: 100 }} />
      </View>
    );
  }

  return null; // Không cần trả về gì nữa vì đã điều hướng
}
