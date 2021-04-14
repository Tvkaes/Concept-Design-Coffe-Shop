import React from "react"
import {Text, View,StyleSheet} from "react-native"
import Animated from "react-native-reanimated"
import Button from "../../components/Button"

interface SubslideProps {
    title:string
    description:string
    last?: boolean
    x:Animated.Node<number>
    onPress: () => void;
}

const Subslide = ({title,description,last,onPress}:SubslideProps) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
        {...{onPress}}
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        padding:44,
        lineHeight:30,
        marginBottom:20,
        flex:1,
    },
    title:{
        fontFamily:"sans-serif",
        fontSize:24,
        fontWeight:"bold"
    },
    description:{
        fontFamily:"sans-serif-condensed",
        color:"#92817a",
        fontSize:16,
        lineHeight:24,
        marginBottom:25,
        

    }
})
export default Subslide