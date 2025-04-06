declare module 'rn-bottom-drawer' {
    import { ReactNode } from 'react';
    import { ViewStyle, GestureResponderEvent } from 'react-native';
  
    interface BottomDrawerProps {
      containerHeight: number;
      offset: number;
      startUp: boolean;
      onExpanded: () => void;
      onCollapsed: () => void;
      duration: number;
      sliderMinHeight: number;
      children: ReactNode;
      style?: ViewStyle;
    }
  
    const BottomDrawer: React.FC<BottomDrawerProps>;
  
    export default BottomDrawer;
  }