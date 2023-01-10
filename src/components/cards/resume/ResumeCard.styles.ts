import {StyleSheet, useWindowDimensions} from 'react-native';
import font from '../../../theme/font';
import theme from '../../../theme/theme';
export default () => {
  const {scale} = useWindowDimensions();
  const fontConfig = font();

  const styles = StyleSheet.create({
    container: {
      margin: 24 / scale,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'flex-start',
      flex: 1,
      padding: 40 / scale,
    },
    childContainer: {
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      padding: 20 / scale,
    },
    title: {
      fontSize: fontConfig.size[24],
      flex: 1,
      color: theme.colors.black,
      fontFamily: fontConfig.fonts.bold,
    },
    subTitle: {
      fontSize: fontConfig.size[14],
      flex: 1,
      color: theme.colors.grey,
      fontFamily: fontConfig.fonts.medium,
    },
  });

  return styles;
};
