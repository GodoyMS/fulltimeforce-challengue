import { createNavigationContainerRef, StackActions } from "@react-navigation/native";


export const navigationRef = createNavigationContainerRef<Record<string, object | undefined>>();

export function navigate(name: string, params?: object): void {
    
    navigationRef.current?.navigate(name, params);
}

 export function dispatch(action: any): void {
     navigationRef.current?.dispatch(action);
     
}

export function replace(name: string, params?: object): void {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function push(name: string, params?: object): void {
    navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function goBack(): void {
    navigationRef.current?.goBack();
}



export const navigation = {
    navigate,
    replace,
    push,
    goBack,

}