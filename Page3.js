import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Page3 = () => {

  const [selectid, setselectid] = useState('') 
  console.log('selectid', selectid) 
  const employee = [
    {
      eId: 101,
      Name: 'Karan',
      Salary: 30000,
    },
    {
      eId: 102,
      Name: 'Dev',
      Salary: 40000,
    },
    {
      eId: 103,
      Name: 'Dhruv',
      Salary: 50000,
    },
    {
      eId: 104,
      Name: 'Sarthak',
      Salary: 60000,
    },
    {
      eId: 105,
      Name: 'Akshit',
      Salary: 60000,
    },
    {
      eId: 106,
      Name: 'Yash',
      Salary: 60000,
    },
    {
      eId: 107,
      Name: 'Priti',
      Salary: 60000,
    },
    {
      eId: 108,
      Name: 'Chirag',
      Salary: 60000,
    },

  ];

 

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'pink' }}> 
      <View>  
          <FlatList
          
          style={{top:9}}
            horizontal
            data={employee}
            renderItem={({ item }) =>
             
            <TouchableOpacity
            
            onPress={()=>{
              setselectid(item?.eId)
            }
            }
            >
             {/* { console.log('item', item?.eId)} */}
              <Text style={{...styles.text,backgroundColor:selectid=== item?.eId ?'white':'black' }}>{item.Name},{item.Salary}</Text>
              </TouchableOpacity>}
            keyExtractor={item => item.eId}
          />
      </View>
      </View>   
      <View style={{ flex: 5,marginBottom:35 }}>
        <View>
          <Text style={{ fontSize: 30 }}>Page3</Text>
          <FlatList
            data={employee}
            renderItem={({ item }) => <TouchableOpacity   ><Text style={styles.text}>{item.Name}, {item.Salary}</Text></TouchableOpacity>}
            keyExtractor={item => item.eId}
          /></View>
      </View>

    </View>
  )
}

export default Page3

const styles = StyleSheet.create({
  text: {
    backgroundColor : '#00e6e6',
    margin:10,
    padding:15,
    color:'black',
    fontSize:20,
    borderRadius: 10
  },
  changeText:{
    backgroundColor: '#004d4d',
    margin: 10,
    padding: 15,
    color: 'white',
    borderRadius: 10,
    fontSize:20,
  }
})


