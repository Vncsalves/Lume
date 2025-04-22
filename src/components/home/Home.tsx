import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Logo from "../../images/logoLume (3).png";
import styles from "./Homestyles";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  function handlePress() {
    setIsActive(!isActive);
  }

  return (
    <View style={styles.conteinerHome}>
      {!isActive ? (<>
          <Text style={styles.containerText}>Lume</Text>
          <Image 
            source={Logo} 
            style={{width: 393, height: 280}}
          />
          <View style={styles.containerButtom}>
            <TouchableOpacity 
              style={styles.Buttom}
              onPress={handlePress}
            >
              <Text style={styles.SOS}>S.O.S</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emergencyContainer}>
          <Text style={styles.emergencyText}>ALERTA ATIVADO!</Text>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={handlePress}
          >
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}