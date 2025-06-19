// import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from '../styles/styles';

export default function Todo() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/20.jpg')}
                style={styles.background}
                imageStyle={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>TO-DO APP</Text>
                    <TextInput placeholder="Todo Title" style={styles.input} placeholderTextColor="#888" />
                    <TextInput placeholder="Todo Description" style={styles.input} placeholderTextColor="#888" />
                    <TouchableOpacity activeOpacity={0.9} style={styles.submitBtn}>
                        <Text style={styles.submitBtnText}>Save To-Do</Text>
                    </TouchableOpacity>
                    <View style={styles.dividerLine}></View>

                    <View style={styles.filterContainer}>
                        <TouchableOpacity activeOpacity={0.9} style={[styles.filterBtn, { backgroundColor: '#fa69b4' }]}>
                            <Text style={[styles.filterText, { color: "#fafafa" }]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={styles.filterBtn}>
                            <Text style={styles.filterText}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={styles.filterBtn}>
                            <Text style={styles.filterText}>Done</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dividerLine}></View>

                    <FlatList
                        data={[]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Text style={styles.todoItem}>{item.title}</Text>
                        )}
                    />
                </View>
            </ImageBackground>
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}
