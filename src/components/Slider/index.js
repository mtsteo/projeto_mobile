import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Styles from '../../Styles/Styles';


function Slider() {
    const width = Dimensions.get('window').width;
    return (
        <View style={Styles.center}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            Cards
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Slider;