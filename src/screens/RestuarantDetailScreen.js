import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { About } from '../components/RestuarantDetail/About'
import { Menu } from '../components/RestuarantDetail/Menu'
// import { Divider } from 'react-native-paper'

const RestuarantDetailScreen = () => {
    return (
        <SafeAreaView>
            <About />
            <Menu />
        </SafeAreaView>

    )
}


export { RestuarantDetailScreen }

const styles = StyleSheet.create({




})