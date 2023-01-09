import {useWindowDimensions} from 'react-native';
export default () => {
  const {fontScale} = useWindowDimensions();

  return {
    fonts: {
      bold: 'Roboto-Bold',
      regular: 'Roboto-Regular',
      medium: 'Roboto-Medium',
    },
    size: {
      10: 10 / fontScale,
      12: 12 / fontScale,
      14: 14 / fontScale,
      16: 16 / fontScale,
      18: 18 / fontScale,
      20: 20 / fontScale,
      24: 24 / fontScale,
    },
  };
};
