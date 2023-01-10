import {StyleSheet, useWindowDimensions} from 'react-native';
import font from '../../../theme/font';
import theme from '../../../theme/theme';
export default () => {
  const {scale, fontScale} = useWindowDimensions();
  const fontConfig = font();

  const styles = StyleSheet.create({
    container: {
      marginTop: 24 / scale,
      marginLeft: 24 / scale,
      marginRight: 24 / scale,
      marginBottom: 30 / scale,
      borderWidth: 1,
      borderColor: theme.colors.white,
      backgroundColor: theme.colors.white,
      borderRadius: 10 / scale,
      padding: 30 / scale,
      fontSize: fontConfig.size[14],
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
    normalPriorityStatus: {
      fontSize: fontConfig.size[14],
      flex: 1,
      marginStart: 30 / scale,
      color: theme.colors.black,
      fontFamily: fontConfig.fonts.regular,
    },
  });

  return styles;
};
