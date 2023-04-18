import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  const [inputData, setInputData] =  useState({lokAwal: '', lokTujuan : '', tglBerangkat: ''});

  const updateLokAwal = (lokAwalValue) => {
    setInputData({...inputData, lokAwal: lokAwalValue});
  }

  const updateLokTujuan = (lokTujuanValue) => {
    setInputData({...inputData, lokTujuan: lokTujuanValue});
  }

  const updateTglBerangkat = (tglBerangkatValue) => {
    setInputData({...inputData, tglBerangkat: tglBerangkatValue});
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="bars" size={30} style={{ color: "#fff", margin: 20 }} />
        <Icon
          name="user"
          size={40}
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: 20,
            marginTop: -53,
          }}
        />
        <Text style={styles.headerText}>Zerotwo.id</Text>
      </View>
      <View style={styles.box2} />
      <View style={styles.boxInput}>
        <SafeAreaView>
          <Text style={styles.textInput}>Lokasi Keberangkatan</Text>
          <TextInput
            placeholder="Contoh: Medan"
            style={styles.input}
            onChangeText={(val) => {console.log(inputData["lokAwal"]); updateLokAwal(val);}}
          />
          <Text style={styles.textInput}>Lokasi Tujuan</Text>
          <TextInput
            placeholder="Contoh: Bandung"
            style={styles.input}
            onChangeText={(val) => {console.log(inputData["lokTujuan"]); updateLokTujuan(val);}}
          />
          <Text style={styles.textInput}>Tanggal Keberangkatan</Text>
          <TextInput
            placeholder="Contoh: 17 April 2023"
            style={styles.input}
            onChangeText={(val) => {console.log(inputData["tglBerangkat"]); updateTglBerangkat(val);}}
          />
        </SafeAreaView>
        <Button
          title="Cari"
          color="#ff4500"
          onPress={() => {
            console.log(inputData);
            navigation.navigate("Hasil Pencarian", {
                inputData: inputData,
            });
          }
          }
        />
      </View>
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Copyright Duta Rega Rolindo | 120140135
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "orange",
    flex: 1.3,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 40,
  },
  box2: {
    backgroundColor: "#fff",
    flex: 1,
  },
  boxInput: {
    backgroundColor: "white",
    position: "absolute",
    top: 150,
    left: 35,
    padding: 20,
    width: 300,
    height: "auto",
    borderRadius: 20,
    borderWidth: 1,
  },
  textInput: {
    fontWeight: "700",
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
