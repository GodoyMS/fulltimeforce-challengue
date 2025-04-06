import { IUser } from "@lib/types/User";



export type SuperRootStackParamList = {
    DrawerNavigation : undefined;
    ProfileUser:IUser

}

export type DrawerStackParameterList = {
    Home: { userId?: string } | undefined;
   
};

