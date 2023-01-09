import {StyleSheet} from 'react-native';
import font from '../../../theme/font';
import theme from '../../../theme/theme';
export default () => {
  const fontConfig = font();

  const styles = StyleSheet.create({
    active: {
      fontSize: fontConfig.size[12],
      marginBottom: 2,
      color: theme.colors.activeBlue,
      fontFamily: fontConfig.fonts.medium,
    },
    inactive: {
      fontSize: fontConfig.size[12],
      marginBottom: 2,
      color: theme.colors.inActiveBlue,
      fontFamily: fontConfig.fonts.regular,
    },
  });

  return styles;
};
