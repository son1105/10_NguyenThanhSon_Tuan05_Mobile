import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.viewInfo}>
                <Image style={styles.img} source={require('../assets/blue.png')}/>
                <View style={styles.viewInfoText}>
                    <Text>Điện Thoại Vsmart Joy 3
                        {'\n'}Hàng chính hãng</Text>
                    <Text>Màu đỏ</Text>
                    <Text>Cung cấp bởi Tiki Tradding</Text>
                    <Text>1.790.000 đ</Text>
                </View>
            </View>
            <View style={styles.viewColors}>

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
    viewInfo:{
        flex: 1,
        flexDirection: 'row',
        width: '100%'
    },
    img:{
        width:'30%',
        height: '90%'
    },
    viewColors:{
        flex: 3
    }
});