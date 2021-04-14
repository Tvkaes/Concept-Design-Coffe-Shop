import React from "react"
import {View, StyleSheet,Text, Dimensions,Image} from "react-native"

const {width,height} = Dimensions.get("window")
export const SLIDE_HEIGHT=0.61 * height

const styles = StyleSheet.create({
    container:{
        width,
        
    },
    title:{
        fontSize:80,
        fontFamily:"sans-serif-thin",
        color:"white",
        textAlign:"center",
   
    },
    titleContainer:{
        height:100,
        
    },
    underlay:{
        ...StyleSheet.absoluteFillObject,
        justifyContent:"flex-end"

    },
    picture:{
        ...StyleSheet.absoluteFillObject,
        width:undefined,
        height:undefined,
    }


})

 
interface SlideProps{
    label:string;
    right?:boolean;
    picture:number
}

const Slide = ({label, right,picture}: SlideProps) =>{
    const transform=[
        {translateY:(SLIDE_HEIGHT-100)/2},
        {translateX:right ? width / 2 - 50 : -width/2 + 50}, 
        {rotate: right ? "-90deg": "90deg"} ]
    
    return(
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture}></Image>

            </View>
            <View style={[styles.titleContainer,{transform}]}>
            <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
   
}

export default Slide;