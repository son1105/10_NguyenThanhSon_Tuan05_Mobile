import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({route, navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image style={styles.image} source={require(`../assets/${route.params?route.params:"blue.PNG"}`)} />
            </View>
            <View style={styles.viewInfo}>
                <Text style={styles.textTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={styles.viewRating}>
                    <View style={styles.viewStar}>
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star" size={24} color="yellow" />
                    <Entypo name="star" size={24} color="yellow" />
                    </View>
                    <Text style={styles.textTitle}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={styles.viewPrice}>
                    <Text style={styles.textPriceSale}>1.790.000 đ</Text>
                    <Text style={styles.textPrice}>1.790.000 đ</Text>
                </View>
                <View style={styles.viewRefund}>
                <Text style={styles.textRefund}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <FontAwesome name="question-circle-o" size={24} color="black" />
                </View>
                <TouchableOpacity style={styles.viewPickColor}
                    onPress={() => navigation.navigate('Pick Color',route.params?route.params:"blue.PNG")}
                >
                    <Text style={styles.textPickColor}>4 MÀU-CHỌN MÀU</Text>
                    <MaterialIcons style={styles.iconPickColor} name="navigate-next" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewImg: {
        flex: 3,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '75%',
        height: '100%'
    },
    viewInfo: {
        flex: 2,
        width: '90%',
    },
    textTitle: {
        marginVertical: 10,
        fontWeight: 400,
        fontSize: '15px',
        fontWeight: 400,
    },
    viewRating: {
        width: '80%',
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewStar:{
        flexDirection: 'row'
    },
    viewPrice: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textPriceSale:{
        fontWeight: 700,
        fontSize: 18
    },
    textPrice:{
        fontWeight: 700,
        fontSize: 15,
        textDecorationLine: 'line-through'
    },
    viewRefund:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textRefund:{
        marginVertical: 20,
        marginRight: 10,
        fontWeight: 700,
        fontSize: 12,
        color: '#FA0000'
    },
    viewPickColor:{
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 10
    },
    textPickColor:{
        width: '90%',
        paddingLeft: '10%',
        textAlign: 'center',
        fontWeight: 400,
        fontSize: 15
    },
    viewButton: {
        flex: 1,
        width: '90%',
        justifyContent: 'flex-end',
    },
    button: {
        width: '100%',
        height: '50%',
        marginBottom: '10px',
        backgroundColor: '#EE0A0A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        borderWidth: 1
    },
    textButton: {
        fontFamily: 'Roboto' ,
        color: '#F9F2F2',
        fontSize: 20,
        fontWeight: 700
    }
});