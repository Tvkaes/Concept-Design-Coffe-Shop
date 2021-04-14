import React, {useContext} from 'react';
import {Text,StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {ThemeContext} from '../theme';


interface ButtonProps {
  label: string;
  variant: 'primary' | 'default';
  onPress: () => void;
}

const Button = ({variant = 'default', label, onPress}: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : `${theme.colors.title}15`;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

const styles =StyleSheet.create({
    container:{
        borderRadius:25,
        height:50,
        width:250,
        justifyContent:"center",
        alignItems:"center"

    },
    label:{
        fontSize:15,
        fontFamily:"sans-serif",
        textAlign:"center"

    }
})

export default Button