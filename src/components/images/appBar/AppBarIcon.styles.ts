import {StyleSheet, useWindowDimensions} from 'react-native';
export default () => {
  const {fontScale} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      width: 26 / fontScale,
      height: 26 / fontScale,
    },
  });

  return styles;
};
