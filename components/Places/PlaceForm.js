import { useState } from 'react';
import {View,Text,ScrollView,StyleSheet,TextInput} from 'react-native'
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

function PlaceForm (){
    const [enteredTitle,setEnteredTitle] = useState('');
    function changeTitleHandler (enteredTitle){
        setEnteredTitle(enteredTitle)
    }
    return (
       <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput onChangeText={changeTitleHandler} value={enteredTitle}  style={styles.input}/>

            </View>
            <ImagePicker/>
            <LocationPicker/>
       </ScrollView>
    )
}
export default PlaceForm;

const styles = StyleSheet.create({
    form :{
        flex: 1,
        padding:24
    },
    label:{
        fontWeight: 'bold',
        marginBottom:4,
        color:Colors.primary500,
    },
    input:{
        marginVertical:8,
        paddingHorizontal:4,
        paddingVertical:8,
        fontSize:16,
        borderBottomColor:Colors.primary700,
        borderBottomWidth:2,
        backgroundColor:Colors.primary100
    }
})