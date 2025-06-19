import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        minHeight: Dimensions.get("screen").height,
    },
    backgroundImage: {
        resizeMode: 'cover',
        opacity: 0.9,
    },
    overlay: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: '#fafafa',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
    input: {
        backgroundColor: '#fafafa',
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        marginVertical: 10,
        // borderColor: '#ddd',
        // borderWidth: 1,
    },
    submitBtn: {
        alignSelf: 'center',
        width: '50%',
        backgroundColor: '#fa69b4',
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 10,
    },
    submitBtnText: {
        color: '#fafafa',
        fontSize: 16,
    },
    dividerLine: {
        height: 2,
        backgroundColor: '#aaa',
        marginVertical: 15,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    filterBtn: {
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 12,
        backgroundColor: '#ccc',
    },
});

export default styles;
