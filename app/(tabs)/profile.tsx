import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';


const Profile = () => {
  const [profile, setProfile] = useState({name:'', age:10});

  const updateProfile = (newProfile) =>{
     setProfile(prevProfile => ({...prevProfile,...newProfile }))
  }


  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <TextInput
        placeholder='Enter name'
        value={profile.name}
        onChangeText={text=>updateProfile({name: text})}
        style={{fontSize:30}}
      />
      <TextInput
        placeholder='Enter age'
        value={profile.age.toString()}
        keyboardType='numeric'
        onChangeText={text => updateProfile({age: Number(text)})}
        style={{fontSize:30}}
      />
      <Text style={{fontSize: 30}}>Name : {profile.name}</Text>
      <Text style={{fontSize: 30}}>Age : {profile.age}</Text>
    </View>
  )
}

export default Profile