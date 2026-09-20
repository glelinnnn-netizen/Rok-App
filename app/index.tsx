//recipe-app/app/index.tsx
//recipe-app/app/index.tsx
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.header }]}>
        <View style={styles.headerRow}>
          <View>
            <Text style={[styles.headerTitle, { color: theme.colors.headerText }]}>
              🍳 My Recipe Book
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.colors.headerSubtitle }]}>
              Discover delicious recipes
            </Text>
          </View>
          <TouchableOpacity
            style={styles.themeToggle}
            onPress={toggleTheme}
            accessibilityLabel="Toggle dark mode"
          >
            <Text style={styles.themeToggleText}>
              {theme.isDark ? '☀️' : '🌙'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/recipe/${item.id}`} asChild>
            <RecipeCard recipe={item} onPress={() => {}} />
          </Link>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <View
        style={[
          styles.footer,
          {
            backgroundColor: theme.colors.footerBg,
            borderTopColor: theme.colors.border,
          },
        ]}
      >
        <Link href="/about" asChild>
          <TouchableOpacity
            style={[styles.aboutButton, { backgroundColor: theme.colors.accent }]}
          >
            <Text style={[styles.aboutButtonText, { color: theme.colors.accentText }]}>
              About This App
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    marginTop: 4,
  },
  themeToggle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeToggleText: {
    fontSize: 22,
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopWidth: 1,
  },
  aboutButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  aboutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});