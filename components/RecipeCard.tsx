//recipe-app/components/RecipeCard.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Recipe } from '../data/recipes';
import { useTheme } from '../context/ThemeContext';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
}

export default function RecipeCard({ recipe, onPress }: RecipeCardProps) {
  const { theme } = useTheme();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#4CAF50';
      case 'Medium': return '#FF9800';
      case 'Hard': return '#F44336';
      default: return '#999';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          shadowColor: theme.colors.shadow,
        },
      ]}
      onPress={onPress}
    >
      <View style={[styles.emojiContainer, { backgroundColor: theme.colors.emojiBg }]}>
        <Text style={styles.emoji}>{recipe.emoji}</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {recipe.title}
        </Text>
        <Text
          style={[styles.description, { color: theme.colors.textSecondary }]}
          numberOfLines={2}
        >
          {recipe.description}
        </Text>
        <View style={styles.footer}>
          <Text style={[styles.time, { color: theme.colors.textSecondary }]}>
            ⏱ {recipe.time}
          </Text>
          <View
            style={[
              styles.difficultyBadge,
              { backgroundColor: getDifficultyColor(recipe.difficulty) },
            ]}
          >
            <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emojiContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  emoji: {
    fontSize: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});