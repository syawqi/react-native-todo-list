import {StyleSheet, useWindowDimensions} from 'react-native';
import font from '../../../theme/font';
import theme from '../../../theme/theme';
import {TodoPriorityType} from '../../../types/todo';
export default (priorityType: TodoPriorityType) => {
  const {scale, fontScale} = useWindowDimensions();
  const fontConfig = font();

  const styles = StyleSheet.create({
    container: {
      margin: 24 / scale,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
    },
    p40: {
      padding: 40 / scale,
    },
    mr10: {
      marginEnd: 10 / fontScale,
    },
    centerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    centerTopRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flex: 1,
    },
    label: {
      fontSize: fontConfig.size[20],
      flex: 1,
      color: theme.colors.black,
      fontFamily: fontConfig.fonts.medium,
    },
    normalContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    childNormalContainer: {
      marginRight: 10 / scale,
      flex: 1,
    },
    verticalLine: {
      width: 30 / scale,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      backgroundColor:
        priorityType === TodoPriorityType.HIGH
          ? theme.colors.red
          : priorityType === TodoPriorityType.LOW
          ? theme.colors.green
          : theme.colors.activeBlue,
    },
    horizontalLine: {
      height: 30 / scale,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      backgroundColor:
        priorityType === TodoPriorityType.HIGH
          ? theme.colors.red
          : priorityType === TodoPriorityType.LOW
          ? theme.colors.green
          : theme.colors.activeBlue,
    },
    checkStyle: {
      width: 28 / fontScale,
      height: 28 / fontScale,
    },
    editorIcon: {
      width: 20 / fontScale,
      height: 20 / fontScale,
    },
    priorityIcon: {
      width: 14 / fontScale,
      height: 14 / fontScale,
    },
    normalPriorityTitle: {
      fontSize: fontConfig.size[20],
      flex: 1,
      color: theme.colors.black,
      fontFamily: fontConfig.fonts.bold,
      marginBottom: 12 / scale,
    },
    normalPriorityStatus: {
      fontSize: fontConfig.size[12],
      flex: 1,
      marginStart: 12 / scale,
      color: theme.colors.grey,
      fontFamily: fontConfig.fonts.regular,
    },
    descriptionText: {
      fontSize: fontConfig.size[14],
      flex: 1,
      marginBottom: 16 / scale,
      marginTop: 20 / scale,
      color: theme.colors.grey,
      fontFamily: fontConfig.fonts.regular,
    },
    doneText: {
      fontSize: fontConfig.size[12],
      flex: 1,
      marginBottom: 16 / scale,
      marginTop: 20 / scale,
      color: theme.colors.green,
      fontFamily: fontConfig.fonts.regular,
    },
  });

  return styles;
};
