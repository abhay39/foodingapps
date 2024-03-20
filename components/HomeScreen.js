import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Carousel from './Carousel';
import Category from './Category';
import Recomended from './Recomended';
import Explore from './Explore';
import AllRestaurants from './AllRestaurants';

const GOOGLE_MAPS_KEY='AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    // Request location permission if not granted
    // Handle permissions for iOS and Android separately
    // Check documentation for the proper way to handle permissions

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Call reverse geocoding API
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_KEY}`
        )
          .then(response => response.json())
          .then(data => {
            const formattedAddress = data.results[0].formatted_address;
            setAddress(formattedAddress);
          })
          .catch(error => {
            console.error('Error fetching address:', error);
          });
      },
      error => setError(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    const watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Call reverse geocoding API
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_KEY}`
        )
          .then(response => response.json())
          .then(data => {
            const formattedAddress = data.results[0].formatted_address;
            setAddress(formattedAddress);
          })
          .catch(error => {
            console.error('Error fetching address:', error);
          });
      },
      error => setError(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);


  return (
    <ScrollView style={{flex:1, backgroundColor:'#f8f8f8',padding:4}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons name="location" size={30} color={"red"}/>
          <View style={{flex:1}}>
            <Text style={{color:"black",fontWeight:'500'}}>Deliver To</Text>
            <Text style={{color:"black",fontWeight:'700'}}>{address}</Text>
          </View>
          <Pressable style={{backgroundColor:"green", padding:2, borderRadius:20,width:40,height:40, justifyContent:'center',alignItems:'center',textAlign:'center', }}>
            <Text style={{fontSize:20,color:'white'}} >A</Text>
          </Pressable>
        </View>

        {/* adding search */}
        <View style={{
          flexDirection:'row',
          justifyContent:"space-between",
          alignItems:'center',
          marginTop:10,
          borderWidth:1,
          borderColor:"#C0C0C0",
          paddingVertical:8,
          paddingHorizontal:10,
          borderRadius:10,
          marginHorizontal:10
        }}>
          <TextInput placeholder='Search for foods, hotels'/>
          <AntDesign name="search1" size={24} color={"red"}/>
        </View>

        {/* images */}
        <Carousel />

        {/* categories */}
       
        <Category />

        {/* recomended */}
        <Recomended />

        {/* Explore */}
        <Text style={{
          textAlign:'center',
          fontSize:20,
          fontWeight:'700',
          color:'gray',
          marginTop:5,
          marginBottom:6,
          letterSpacing:4
        }}>EXPLORE</Text>
        <Explore />

        {/* Restaurans */}
        <Text style={{
          textAlign:'center',
          fontSize:20,
          fontWeight:'700',
          color:'gray',
          marginTop:5,
          marginBottom:6,
          letterSpacing:6
        }}>ALL RESTAURANTS</Text>
        <AllRestaurants />
        
    </ScrollView>
  );
};

export default HomeScreen

