import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSharedData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }

    return;
  } catch (e) {
    return;
  }
};

export const storeSharedData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return;
  } catch (e) {
    return;
  }
};
