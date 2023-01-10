import React from 'react';
import {Text, View} from 'react-native';
import ResumeCardStyles from './ResumeCard.styles';

const ResumeCard = ({todos, histories}: {todos: number; histories: number}) => {
  const styles = ResumeCardStyles();

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.title}>{todos}</Text>
        <Text style={styles.subTitle}>To Do</Text>
      </View>
      <View style={styles.childContainer}>
        <Text style={styles.title}>{histories}</Text>
        <Text style={styles.subTitle}>Done</Text>
      </View>
    </View>
  );
};

export default ResumeCard;
