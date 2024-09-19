import { Text, SafeAreaView, StyleSheet, View, Pressable, Image } from 'react-native';

import React, {useState} from 'react';

export default function App() {
  //useState tăng giảm sô lượng 
  const [count, setCount] = useState(1);
  //useState giá, thành tiền
  const [price, setTotal] = useState(141800);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <View style={{
      flex:1,
      backgroundColor:"#C4C4C4",
      width:360,
      height:640
    }}>
      <View style={{
      flex:8,
      backgroundColor:"#FFFFFF",
    }}>
        <View style={{
        flex:7,
        flexDirection:"row"
      }}>
        <View style={{
          flex:4,
        }}>
          <Image source = {require("./book.png")} style={{marginTop:14, marginLeft:13, width:104, height:127}}/>
          <Text style={{marginTop:16, textAlign:"center" , fontSize:12, fontWeight:700}}>
          Mã giảm giá đã lưu
          </Text>
        </View>
        <View style={{
          flex:6,
          flexDirection:"column"
        }}>
          <View style={{
            flex:5,
            flexDirection:"column"
          }}>
              <Text style={{marginTop:14, width:300, height:14, fontSize:12, fontWeight:700}}>
              Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={{marginTop:20, width:191, height:14,textAlign:"center", justifyContent:"center", fontSize:12, fontWeight:700}}>
              Cung cấp bởi Tiki Trading
              </Text>
              <Text style={{marginLeft:10, marginTop:10, width:84, height:21,textAlign:"center", fontSize:18, fontWeight:700, color:"#EE0D0D"}}>
              141.800 đ
              </Text>
              <Text style={{marginTop:5, width:84, height:21,textAlign:"center", fontSize:12, fontWeight:700, color:"#808080" }}>
              <del>141.000 đ</del>
              </Text>
          </View>
           <View style={{
            flex:2,
            flexDirection:"row"
          }}>
            <Pressable 
              onPress={decrement} 
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'lightgray',
                },
                styles.button,
              ]}
            >
              <Text style={styles.text}>-</Text>
            </Pressable>
            <Text style={{fontSize: 20,fontWeight:700, marginTop:10}}>{count}</Text>
            <Pressable 
              onPress={increment} 
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'lightgray',
                },
                styles.button,
              ]}
            >
              <Text style={styles.text}>+</Text>
            </Pressable>
            <Text style={{fontSize: 12,fontWeight:700, marginTop:14, marginLeft:20, color:"#134FEC"}}>Mua sau</Text>
          </View>
           <View style={{
            flex:2,
            flexDirection:"column"
          }}>
              <Text style={{fontSize: 12,fontWeight:700, marginTop:7, marginLeft:10, color:"#134FEC"}}>
              Xem tại đây 
              </Text>
          </View>
        </View>
      </View>
      <View style={{
        flex:3,
        backgroundColor:"#FFFFFF",
        flexDirection:"row"
      }}>
        <View style={{ borderWidth: 1, borderColor: '#808080', padding: 10,width:190, height:45, borderRadius: 2,marginLeft:10, justifyContent:"center", flexDirection: "row", alignItems:"center" }}>
          <Image source = {require("./yellow_block.png")} style={{ width:31, height:16}}/>
          <Text style={{fontSize: 18,fontWeight:700, marginLeft:10,}}>
        Mã giảm giá
        </Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: '#808080',width:99, height:45, borderRadius: 2,marginLeft:30, justifyContent:"center", alignItems:"center", backgroundColor:"#0A5EB7" }}>
          <Text style={{fontSize: 20,fontWeight:700, color:"#FFFFFF"}}>
        Áp dụng
        </Text>
        </View>
        
      </View>  
    </View>
    <View style={{
      marginTop:10,
      flex:2,
      backgroundColor:"#FFFFFF", 
      flexDirection:"row",
      alignItems:"center"
    }}>
        <Text style={{ width:227, height:14,textAlign:"center", fontSize:12, fontWeight:700}}>
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={{width:80, height:14,textAlign:"center", fontSize:12, fontWeight:700, color:"#134FEC"}}>
              Nhập tại đây?
        </Text>
    </View>
    <View style={{
      marginTop:10,
      flex:2,
      backgroundColor:"#FFFFFF",
      flexDirection:"row",
      alignItems:"center"
    }}>
        <Text style={{ width:113, height:20,textAlign:"center", fontSize:18, fontWeight:700}}>
              Tạm tính
        </Text>
        <Text style={{marginLeft:100, width:90, height:21,textAlign:"center", fontSize:18, fontWeight:700, color:"#EE0D0D"}}>
              {count*price} đ
        </Text>
    </View>
    <View style={{
      flex:3,
      backgroundColor:"#C4C4C4"
    }}>
      
    </View>
    <View style={{
      flex:3,
      backgroundColor:"#FFFFFF"
    }}>
          <View style={{
            flex:2,
            flexDirection:"row",
            alignItems:"center"
          }}>
              <Text style={{ width:113, height:20,textAlign:"center", fontSize:18, fontWeight:700, color:"#808080"}}>
                Thành tiền
              </Text>
              <Text style={{marginLeft:100, width:90, height:21,textAlign:"center", fontSize:18, fontWeight:700, color:"#EE0D0D"}}>
                {count*price} đ
               </Text>
          </View>
          <View style={{
            flex:3,
            margin:18,
            width:331,
            backgroundColor:"red",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <Text style={{height:20,textAlign:"center", fontSize:20, fontWeight:700, color:"#FFFFFF"}}>
                TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 13,
    alignItems: 'center',
    height:20,
    width:20,
    justifyContent:"center"
  },
  text: {
    fontSize: 20,
    fontWeight:700
  },
});
