import {StyleSheet, useWindowDimensions} from 'react-native';
import font from '../../../theme/font';
import theme from '../../../theme/theme';
export default () => {
  const {scale, fontScale} = useWindowDimensions();
  const fontConfig = font();

  const styles = StyleSheet.create({
    container: {
      paddingLeft: 36 / scale,
      paddingRight: 36 / scale,
      paddingTop: 34 / scale,
      paddingBottom: 34 / scale,
      flexDirection: 'row',
      backgroundColor: theme.colors.white,
      alignItems: 'center',
    },
    label: {
      fontSize: fontConfig.size[20],
      flex: 1,
      color: theme.colors.black,
      fontFamily: fontConfig.fonts.medium,
    },
    mr10: {
      marginRight: 24 / scale,
    },
    icon: {
      width: 12 / fontScale,
      height: 20 / fontScale,
    },
  });

  return styles;
};
