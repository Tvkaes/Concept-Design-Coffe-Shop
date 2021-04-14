
import React from "react"
import {View, StyleSheet, Dimensions} from "react-native"
import Slide,{SLIDE_HEIGHT} from "./Slide"
import  Animated ,{ useValue,event, interpolateColors, multiply, divide } from "react-native-reanimated"
import Subslide from "./Subslide"
import Dot from "./Dot"
import { useRef } from "react"



const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    slider:{
        height:SLIDE_HEIGHT,
        borderBottomRightRadius:75,

    },
    footer:{
        flex:1
    },
    footerContent:{
        flex:1,
        backgroundColor:"white",
        borderTopLeftRadius:75,
        
    },
    pagination:{
        height:75,
        alignItems:"center",
        justifyContent:"center",
        ...StyleSheet.absoluteFillObject,
        flexDirection:"row",


    }


})
const slides =[
    {label:"Coffe", title:"Do you like coffe?",
    description:"we have the best coffee according to your tastes", color:"#c7b198",picture: require("./assets/1.png")},
    {label:"Cookies",title:"Cookies?",
    description:"we have different types of fresh cookies", color:"#596e79",picture: require("./assets/2.png")},
    {label:"Tea",title:"Do you prefer tea?",
    description:"we have many types of coffee and different ways to prepare them", color:"#dfd3c3",picture: require("./assets/3.png")},
    {label:"Sandwich",title:"Any sandwich?",
    description:"we are open to your tastes in preparing your ideal sandwich", color:"#cae4db",picture: require("./assets/4.png")}
    
] 

const onBoarding = () =>{
    const x = useValue(0)
    const scroll = useRef<Animated.ScrollView>(null)
    const onScroll = onScrollEvent({x})
    const backgroundColor = interpolateColors(x,{
        inputRange:slides.map((_,i) => i * width),
        outputColorRange:slides.map(Slide => Slide.color ),
    }) as any
    
    return(
        <View style={styles.container}>
        <Animated.View style={[styles.slider, {backgroundColor}]}>
            <Animated.ScrollView ref={scroll} horizontal snapToInterval={width} decelerationRate="fast"
            showsHorizontalScrollIndicator={false} bounces={false} {...{onScroll}}>
                {slides.map(({label,picture},index)=>(
                    <Slide key={index} right={!!(index%2)} {...{label,picture}}></Slide>
                ))}
            </Animated.ScrollView>
        </Animated.View>
        <View style={styles.footer}>
            <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor }}></Animated.View>
            <View style={styles.footerContent}>
                 <View style={styles.pagination}>
                    {slides.map((_,index)=> (<Dot key={index} currentIndex={divide(x,width)}{...{index}}></Dot>))}
                    </View>
                    <Animated.View style={{ flex:1,flexDirection:"row",width:width*slides.length,
                      transform:[{translateX: multiply(x, -1)}]}}>
                          {slides.map(({title,description},index)=>(
                    <Subslide key={index} {...{title,description,x}} 
                    onPress={()=>{
                        if(scroll.current){
                            scroll.current.getNode().scrollTo({x: width * (index + 1) , animated:true})
                        }
                    }}
                    
                    ></Subslide>
                ))}
                    </Animated.View>
            </View>
        </View>
        </View>
    )
   
}
export const onScrollEvent = (contentOffset: {
    x?: Animated.Node<number>;
    y?: Animated.Node<number>;
  }) =>
    event([
      {
        nativeEvent: {
          contentOffset,
        },
      },
    ]);

export default onBoarding



