//recipe-app/app/_layout.tsx
//recipe-app/app/_layout.tsx
import { Stack } from 'expo-router';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function StackLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.header,
        },
        headerTintColor: theme.colors.headerText,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: theme.colors.background,
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

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StackLayout />
    </ThemeProvider>
  );
}