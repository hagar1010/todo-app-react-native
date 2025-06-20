import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    background: {
        width: '100%',
        minHeight: Dimensions.get("screen").height,
    },
    backgroundImage: {
        resizeMode: 'cover',
        opacity: 0.7,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 32,
        // color: '#fafafa',
        textAlign: 'center',
        // marginTop: 30,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fafafa',
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        marginVertical: 10,
        borderColor: '#ddd',
        borderWidth: 1,
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
        paddingHorizontal: 25,
        borderRadius: 12,
        backgroundColor: '#ddd',
    },
    todoItem:{
        padding: 15,
        borderColor: '#ddd',
        borderWidth: 1,
        // backgroundColor: '#fedeee',
        backgroundColor: '#fafafa',
        borderRadius: 12,
        marginVertical: 10,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',    
    },
    row:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    }
});

export default styles;
