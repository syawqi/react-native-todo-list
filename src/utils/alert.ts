import {Alert} from 'react-native';

export const callAlert = (
  title: string,
  description: string,
  onApprove: () => void,
  onCancel: () => void,
) =>
  Alert.alert(title, description, [
    {
      text: 'Cancel',
      onPress: () => onApprove(),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => onCancel()},
  ]);
