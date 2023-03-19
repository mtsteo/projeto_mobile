import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Styles from '../../Styles/Styles';
import Profile from '../Profile';




function Slider() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <Carousel
            
                overscrollEnabled
                loop
                mode='parallax'
                width={width}
                height={height}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                renderItem={({ }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Profile />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }

})

export default Slider;