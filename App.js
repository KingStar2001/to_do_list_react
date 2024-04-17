import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

// App component, the main entry point of the application
export default function App() {
  return (
    // Wrapper to ensure content does not extend beyond safe area
    <SafeAreaView>
      {/* Main container for the todo screen */}
      <View>
        {/* Render the todo screen component */}
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

// Styles for the app (currently empty)
const styles = StyleSheet.create({});
