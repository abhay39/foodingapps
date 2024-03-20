import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const dummyImages=[
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
]

const Carousel = () => {

  return (
    <View>
      <SliderBox images={dummyImages} autoPlay circleLoop dotColor="#13274F" inActiveDotColor="#9084AE" ImageComponentStyle={{
        borderRadius:6,
        width:"94%",
        marginTop:10
      }}/>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})