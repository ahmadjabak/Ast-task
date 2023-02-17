import { StyleSheet,Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import {Card, Title } from 'react-native-paper';
import axios from 'axios'


const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(6);
  const indexOfLast = currentPage * PerPage;
  const indexOfFirst = indexOfLast - PerPage;
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://63ece97e32a0811723a4ca01.mockapi.io/api/test/users`)
      .then(res => {
        const persons = res.data;
        setData(persons);
        console.log(persons)
      });
  }, []);



  return (
    <View>
      <View style={styles.backgroundp}>
        <Text style={styles.homeTitle}>Home Page</Text>
      </View>
      <ScrollView>
        <View style={styles.pflex}>
          {data.map((users, index) =>
            <Card style={styles.pcard} key={index}>
              <Card.Cover style={styles.imagep} source={{ uri: users.avatar }} />
              <Card.Content>
                <View style={styles.info}>
                  <Title style={styles.ptitle}>{users.name}</Title>
                </View>
              </Card.Content>
            </Card>
          )}
        </View>
      </ScrollView>
     
    </View>
  )
}

export default Users

const styles = StyleSheet.create({

  pcard: {
    margin: 20,
    width: 140,
  },

  pflex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  ptitle: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 75,
  
  },

  homeTitle: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'white'
  },
  
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  backgroundp: {
    backgroundColor: "#1976d2",
    height:100
  },

  imagep: {
    height: 140,
  },
  
})