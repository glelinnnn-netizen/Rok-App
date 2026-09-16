//recipe-app/app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: '📚 Recipe Book',
        }} 
      />
      <Stack.Screen 
        name="about" 
        options={{ 
          title: 'About',
        }} 
      />
      <Stack.Screen 
        name="recipe/[id]" 
        options={{ 
          title: 'Recipe Details',
        }} 
      />
    </Stack>
  );
}