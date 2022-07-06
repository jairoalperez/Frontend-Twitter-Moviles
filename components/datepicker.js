import React, {useState} from "react";
import {Modal, StyleSheet, Text, TouchableHighlight, View, Platform} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import moment from 'moment'

const CustomDatePicker = (props) => {

    const[date, setDate] = useState(new Date())

    return (
        <TouchableHighlight
            activeOpacity={0}
            onPress={() => console.log('Seleccionar Fecha')}>
            <Text>{moment().format('YYYY-MM-DD')}</Text>

        </TouchableHighlight>
        
    )
}

CustomDatePicker.defaultProps = {

}

export default CustomDatePicker;