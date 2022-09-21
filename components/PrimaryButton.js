import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.buttonOuterCOntainer}>
      <Pressable
        style={(pressedData) =>
          pressedData.pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#490326" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterCOntainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    // 25% transparent
    opacity: 0.75,
  },
});
