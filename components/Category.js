import { StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React from 'react'

const dummyItems=[
    {
        id: "1",
        name: "fastest delivery",
      },
      {
        id: "2",
        name: "rating 4.0+",
      },
      {
        id: "3",
        name: "offers",
      },
      {
        id: "4",
        name: "cuisines",
      },
      {
        id: "5",
        name: "MAX Safety",
      },
      {
        id: "6",
        name: "Pro",
      },
]

const Category = () => {
  return (
    <View>
       
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyItems}
        renderItem={(({item})=>{
          return (
            <View key={item.id} style={{}}>
              <TouchableOpacity activeOpacity={0.8} style={{
                marginTop:5,
                marginHorizontal:10,
                marginVertical:5,
                padding:5,
                backgroundColor:'#DB7093',
                borderRadius:5,
                justifyContent:'center',
                alignItems:'center',
                marginTop:10
              }}>
                <Text style={{color:'white', fontWeight:'600'}}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})