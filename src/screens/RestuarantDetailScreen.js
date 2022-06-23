import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { About } from '../components/RestuarantDetail/About'
import { Menu } from '../components/RestuarantDetail/Menu'
import { ViewCart } from '../components/RestuarantDetail/ViewCart'

// import { Divider } from 'react-native-paper'

const RestuarantDetailScreen = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Menu />
            <ViewCart navigation={navigation} />
        </View>

    )
}


export { RestuarantDetailScreen }

const styles = StyleSheet.create({




})