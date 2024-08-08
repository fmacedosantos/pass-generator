import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: 'column',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#4d4d4d'
    }, 
    inputContainer: {
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center', 
    }
  });