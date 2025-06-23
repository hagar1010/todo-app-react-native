import { ImageBackground, View } from "react-native";
import styles from "../styles/styles";

const Container = ({ children }) => {
    return (
        <ImageBackground
            source={require("../../assets/13.png")}
            style={styles.background}
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                {children}
            </View>
        </ImageBackground>
    );
};

export default Container;

