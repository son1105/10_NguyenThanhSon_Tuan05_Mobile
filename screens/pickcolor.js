import {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App({route, navigation  }) {
    var checkColor = route.params
    var [color, setColor] = useState(checkColor?
        (checkColor == 'black.PNG'?'đen':
        checkColor == 'blue.PNG'?'xanh':
        checkColor == 'red.PNG'?'đỏ':'bạc')
        :'xanh'); //['black.PNG','blue.PNG','red.PNG','silver.PNG'
    var [image, setImage] = useState(route.params);
    return (
        <View style={styles.container}>
            <View style={styles.viewInfo}>
                <Image style={styles.img} source={require(`../assets/${image}`)}/>
                <View style={styles.viewInfoText}>
                    <Text style={styles.textInfo}>Điện Thoại Vsmart Joy 3
                        {'\n'}Hàng chính hãng</Text>
                    <Text style={styles.textInfo}>Màu: <Text style={[styles.textInfo, {fontWeight:700}]}>{color}</Text></Text>
                    <Text style={styles.textInfo}>Cung cấp bởi <Text style={[styles.textInfo, {fontWeight:700}]}>Tiki Tradding</Text></Text>
                    <Text style={styles.textPrice}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={styles.viewColors}>
                <Text style={styles.textColor}>Chọn một màu bên dưới:</Text>
                <View style={styles.viewRect}>
                <TouchableOpacity style={[styles.rectangle,{backgroundColor:'#C5F1FB'}]}
                    onPress={()=>{
                        setImage('silver.PNG');
                        setColor('bạc');
                    }}
                />
                <TouchableOpacity style={[styles.rectangle,{backgroundColor:'#F30D0D'}]}
                    onPress={()=>{
                        setImage('red.PNG');
                        setColor('đỏ');
                    }}
                />
                <TouchableOpacity style={[styles.rectangle,{backgroundColor:'#000000'}]}
                    onPress={()=>{
                        setImage('black.PNG');
                        setColor('đen');
                    }}
                />
                <TouchableOpacity style={[styles.rectangle,{backgroundColor:'#234896'}]}
                    onPress={()=>{
                        setImage('blue.PNG');
                        setColor('xanh');
                    }}
                />
                </View>
                <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{navigation.navigate('Home',image)}}
                >
                    <Text style={styles.textButton}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    viewInfo:{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    img:{
        marginHorizontal: '2%',
        width:'30%',
        height: '90%'
    },
    viewInfoText:{
        height: '90%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: '3%',
    },
    textInfo:{
        // flex: 1,
        fontWeight: 400,
        fontSize: 15
    },
    textPrice:{
        // flex: 1,
        fontWeight: 700,
        fontSize: 18
    },
    viewColors:{
        flex: 3,
        backgroundColor: '#C4C4C4'
    },
    textColor:{
        flex: 1,
        marginHorizontal: '5%',
        marginTop: '2%',
        fontWeight: 400,
        fontSize: 18
    },
    viewRect:{
        flex: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rectangle:{
        width: '20%',
        height: '20%',
        marginVertical: '2%',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
    },
    viewButton:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: '90%',
        height: '60%',
        backgroundColor: '#1952E2',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color: '#fff',
        fontWeight: 700,
        fontSize: 20
    },
});