import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";

export default function GodOfWarUI() {
  const [modalVisible, setModalVisible] = useState(false);

  // list of God of War weapons
  const weapons = [
    { id: "1", name: "Leviathan Axe" },
    { id: "2", name: "Blades of Chaos" },
    { id: "3", name: "Draupnir Spear" },
  ];
// god of war ui
  return (
    <View style={styles.container}>
      {/* BUTTON */}
      <Text style={styles.label}>Button: Summon Kratos</Text>
      <Button
        title="Call Kratos"
        color="#8B0000"
        onPress={() => alert("KRATOS: Boy!")}
      />
// rage button
      {/* TOUCHABLEOPACITY */}
      <Text style={styles.label}>TouchableOpacity: Spartan Rage Trigger</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => alert("Spartan Rage Activated!")}
      >
        <Text style={styles.touchableText}>UNLEASH RAGE</Text>
      </TouchableOpacity>
// image of god of war
      {/* IMAGE */}
      <Text style={styles.label}>Image: God of War Icon</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg", // isnt loading my image so used ai for image
        }}
        style={styles.image}
      />
//atreus button
      {/* MODAL */}
      <Text style={styles.label}>Modal: Atreus Calling</Text>
      <Button title="Hear Atreus" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              ATREUS: Father, look! Enemies ahead! // atreus statement
            </Text>
            <Button
              title="Close"
              color="#8B0000"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

      {/* FLATLIST */}
      <Text style={styles.label}>FlatList: Kratos’ Weapons</Text>
      <FlatList
        data={weapons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.weaponItem}> {item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: "#1C1C1C", // black background
  },
  label: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "700",
    color: "#E5E5E5",
  },
  touchable: {
    backgroundColor: "#8B0000", // red colour
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  touchableText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 220,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
    alignSelf: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalContent: {
    backgroundColor: "#2E2E2E",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  modalText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "600",
  },
  weaponItem: {
    padding: 10,
    fontSize: 16,
    color: "#F5F5F5",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
});
