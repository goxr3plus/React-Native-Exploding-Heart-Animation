import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Application} from "./src/Application";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="hidden"/>
            <Application/>
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
});
