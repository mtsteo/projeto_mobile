import { Card, Paragraph, Title, Button } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Styles from '../../Styles/Styles';


export default function Profile(props) {


    return (
        <View style={{ marginEnd: 25, marginStart: 25 }}>
            <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <View>
                        <Text>NOME DISCENTE</Text>
                    </View>
                    <View>
                        <Text>Dados Docentes</Text>
                    </View>
                </Card.Content>
                <View style={Styles.button}>
                    <Card.Actions>
                        <Button style={styles.button }>Ok</Button>
                    </Card.Actions>
                </View>

            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Styles.colorGreen, 
        borderWidth: 0

    }
})
