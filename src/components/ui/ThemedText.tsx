import { Text, type TextProps, StyleSheet } from 'react-native';
import {COLORS, FONT, SIZES} from "@constants/theme"

export type ThemedTextProps = TextProps & {

  color?:string;
  weight?:"bold" | "medium" | "regular"
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'| 'h6' | 'h7';
};

export function ThemedText({
  style,
  color=COLORS.white,
  type = 'h1',

  weight="medium",
  ...rest
}: ThemedTextProps) {

  return (
    <Text
      style={[
        type === 'h1' ? styles.h1 : undefined,
        type === 'h2' ? styles.h2 : undefined,
        type === 'h3' ? styles.h3 : undefined,
        type === 'h4' ? styles.h4 : undefined,
        type === 'h5' ? styles.h5 : undefined,
        type === 'h6' ? styles.h6 : undefined,
        type === 'h7' ? styles.h7 : undefined,

        weight==="bold" ? {fontFamily:FONT.bold} : undefined,
        weight==="medium" ? {fontFamily:FONT.medium} : undefined,
        weight==="regular" ? {fontFamily:FONT.regular} : undefined,
        color ? {color:color} : {color:COLORS.black},
        style,
      ]}
      {...rest}
    />
  );
}


const styles = StyleSheet.create({
  h1: {
    fontSize:SIZES.xxLarge,
  },
  h2: {
    fontSize:SIZES.xLarge,
  },
  h3: {
    fontSize:SIZES.large,
  },
  h4: {
    fontSize:SIZES.medium,
  },
  h5: {
    fontSize:SIZES.small,
  },
  h6:{
    fontSize:SIZES.xSmall,
        
  },
  h7:{
    fontSize:SIZES.xxSmall,
        
  }
});
