import {StyleSheet, useWindowDimensions} from 'react-native';
export default () => {
  const {fontScale} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      width: 24 / fontScale,
      height: 24 / fontScale,
    },
  });

  return styles;
};
