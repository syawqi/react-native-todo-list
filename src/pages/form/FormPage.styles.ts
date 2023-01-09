import {StyleSheet, useWindowDimensions} from 'react-native';
import font from '../../theme/font';
import theme from '../../theme/theme';
export default () => {
  const {scale, fontScale} = useWindowDimensions();
  const fontConfig = font();

  const styles = StyleSheet.create({
    input: {
      marginTop: 24 / scale,
      marginLeft: 24 / scale,
      marginRight: 24 / scale,
      borderWidth: 1,
      borderColor: theme.colors.grey,
      borderRadius: 10 / scale,
      padding: 20 / scale,
      fontSize: fontConfig.size[14],
    },
    button: {
      marginTop: 100 / scale,
      marginLeft: 24 / scale,
      marginRight: 24 / scale,
      backgroundColor: theme.colors.activeBlue,
      borderRadius: 10 / scale,
      padding: 40 / scale,
      alignItems: 'center',
      fontSize: fontConfig.size[14],
    },
    buttonText: {
      fontSize: fontConfig.size[14],
      color: theme.colors.white,
      fontFamily: fontConfig.fonts.regular,
    },
    normalPriorityStatus: {
      fontSize: fontConfig.size[14],
      flex: 1,
      marginStart: 30 / scale,
      color: theme.colors.black,
      fontFamily: fontConfig.fonts.regular,
    },
    centerRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priorityIcon: {
      width: 24 / fontScale,
      height: 24 / fontScale,
    },
    mb: {
      marginBottom: 20 / scale,
      marginTop: 20 / scale,
    },
  });

  return styles;
};
