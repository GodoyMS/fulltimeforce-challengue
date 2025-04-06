import { ReactNode } from "react"
import { ViewStyle } from "react-native";

export type MainContainerProps = {
    children: ReactNode;
    style?: ViewStyle;
    statusbar?:boolean
}

export type BodyContainerProps = {
    children: ReactNode;
    style?: ViewStyle
}