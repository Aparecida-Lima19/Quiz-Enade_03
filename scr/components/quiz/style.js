// components/quiz/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  questionText: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#4CAF50',
  },
  optionText: {
    fontSize: 18,
    color: '#000',
  },
  nextButton: {
    padding: 15,
    backgroundColor: '#054BFF',
    borderRadius: 10,
    marginVertical: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default styles;
