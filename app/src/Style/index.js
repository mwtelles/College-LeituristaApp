import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    icon: {
        width: "80%",
        height: "80%"
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#000",
      },
      camera: {
        width: "100%",
        flex: 2,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        
      },
      buttonFlip: {
        position: "absolute",
        bottom: 50,
        left: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      buttonTake: {
        position: "absolute",
        bottom: 50,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      contentPhoto: {
        flex: 1,
        backgroundColor: "#000"
      },
      contentPhotoButton: {
        flex: 1,
        flexDirection: "row"
      },
      img: {
        width: "100%",
        height: "80%",
        marginBottom: 40,
      },
      buttonClose: {
        position: "absolute",
        top: 60,
        left: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      buttonConfirm: {
        position: "absolute",
        top: 60,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      selectInput: {
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "#000",
        color: "#000",
        borderRadius: 6,
        margin: 5,
        padding: 5,
        fontWeight: "bold"
      },

});

export default styles;