//recipe-app/app/index.tsx
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍳 My Recipe Book</Text>
        <Text style={styles.headerSubtitle}>Discover delicious recipes</Text>
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

      <View style={styles.footer}>
        <Link href="/about" asChild>
          <TouchableOpacity style={styles.aboutButton}>
            <Text style={styles.aboutButtonText}>About This App</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#f4511e',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ffe0d0',
    marginTop: 4,
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
    backgroundColor: 'rgba(248, 248, 248, 0.95)',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  aboutButton: {
    backgroundColor: '#f4511e',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  aboutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});