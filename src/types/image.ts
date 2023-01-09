import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

export type CommonIconPropTypes = {
  source: ImageSourcePropType | undefined;
  style?: StyleProp<ImageStyle>;
  resizeMode: ImageResizeMode;
};
