import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const data = [
    {
      id: "0",
      name: "Offers",
      description: "Upto 50% off",
      image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Legends",
      description: "Across India",
      image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
    },
    {
      id: "2",
      name: "Gourmet",
      description: "Selections",
      image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
    },
    {
      id: "3",
      name: "Healthy",
      description: "Curated dishes",
      image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
    },
  ];

const Explore = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        data.map((item,index)=>{
            return (
              <View key={index} style={{
                backgroundColor:"white",flexDirection:'row',margin:10,borderRadius:8,alignItems:'center',justifyContent:'center',padding:5,borderWidth:0.5
              }}>
                <View style={{
                    alignItems:'center',justifyContent:'center'
                }}>
                    <Image source={{uri:item.image}}  height={50} width={50}/>
                    <Text style={{fontWeight:'500',fontSize:15,color:'black',textAlign:'center',marginTop:10}}>{item.name}</Text>
                    <Text style={{flex:1,marginTop:3,color:'gray',textAlign:'center'}}>{item.description}</Text>
                </View>
              </View>
            )   
        })
      }
    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({})