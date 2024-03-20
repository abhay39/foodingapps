import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Hotel = ({item}) => {
  return (
    <Pressable style={{
        marginHorizontal:6,
        marginVertical:12,
        borderRadius:20,
        backgroundColor:"white",
    }}>
      <Image source={{uri:item.featured_image}}
        style={{
            width:"100%",
            aspectRatio:6/4,
            borderTopLeftRadius:6,
            borderTopRightRadius:6
        }}
      />
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
      }}>
        <View style={{
            
        }}>
            <Text style={{
                paddingHorizontal:10,
                marginTop:10,
                fontSize:16,
                fontWeight:'600',
                color:'black'
            }}>{item.name}</Text>
            <Text style={{
                paddingHorizontal:10,
                marginTop:3,
                fontSize:15,
                fontWeight:'500',
                color:'gray'
            }}>North India Fast Food 160 for one</Text>
            <Text style={{
                paddingHorizontal:10,
                marginTop:3,
                fontSize:14,
                fontWeight:'500',
                color:'#505050'
            }}>{item.time}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#006A4E',borderRadius:4,paddingHorizontal:4,paddingVertical:5,gap:3}}>
        <Text style={{
            textAlign:'center',
            color:'white',
            fontWeight:'600',
            fontSize:12
        }}>{item.aggregate_rating}</Text>
        <Ionicons name="star-sharp" color="white" size={15}/>
        </View>
      </View>
      <View style={{
          borderWidth:0.5,
          borderColor:"#CBCBCB",
          marginHorizontal:10,
          marginVertical:4
        }}/>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:4,
            marginHorizontal:8,marginVertical:5
        }}>
            <MaterialCommunityIcons name="brightness-percent" color="#1F75FE" size={24}/>
            <Text style={{
                marginLeft:2,color:'#1F75FE',fontWeight:'500'
            }}>20% OFF up tp Rs 100</Text>
        </View>
    </Pressable>
  )
}

export default Hotel

const styles = StyleSheet.create({})