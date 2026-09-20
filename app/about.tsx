//recipe-app/app/about.tsx
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={[styles.header, { backgroundColor: theme.colors.header }]}>
        <Text style={styles.emoji}>👨‍🍳</Text>
        <Text style={[styles.title, { color: theme.colors.headerText }]}>
          Recipe Book App
        </Text>
        <Text style={[styles.version, { color: theme.colors.headerSubtitle }]}>
          Version 1.0.0
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          About This App
        </Text>
        <Text style={[styles.text, { color: theme.colors.textSecondary }]}>
          This is a simple recipe book app built with React Native and Expo Router.
          It showcases basic navigation, dynamic routes, and list rendering.
        </Text>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Features
        </Text>
        <View style={styles.featureList}>
          <Text style={[styles.featureItem, { color: theme.colors.textSecondary }]}>
            ✅ Browse recipe collection
          </Text>
          <Text style={[styles.featureItem, { color: theme.colors.textSecondary }]}>
            ✅ View detailed recipes
          </Text>
          <Text style={[styles.featureItem, { color: theme.colors.textSecondary }]}>
            ✅ Easy navigation
          </Text>
          <Text style={[styles.featureItem, { color: theme.colors.textSecondary }]}>
            ✅ Clean and simple design
          </Text>
          <Text style={[styles.featureItem, { color: theme.colors.textSecondary }]}>
            ✅ Dark mode support
          </Text>
        </View>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Tech Stack
        </Text>
        <View style={styles.techStack}>
          <View style={[styles.techBadge, { backgroundColor: theme.colors.emojiBg }]}>
            <Text style={[styles.techText, { color: theme.colors.textSecondary }]}>
              React Native
            </Text>
          </View>
          <View style={[styles.techBadge, { backgroundColor: theme.colors.emojiBg }]}>
            <Text style={[styles.techText, { color: theme.colors.textSecondary }]}>
              Expo
            </Text>
          </View>
          <View style={[styles.techBadge, { backgroundColor: theme.colors.emojiBg }]}>
            <Text style={[styles.techText, { color: theme.colors.textSecondary }]}>
              Expo Router
            </Text>
          </View>
          <View style={[styles.techBadge, { backgroundColor: theme.colors.emojiBg }]}>
            <Text style={[styles.techText, { color: theme.colors.textSecondary }]}>
              TypeScript
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        style={[styles.backButton, { backgroundColor: theme.colors.accent }]}
      >
        <Text style={[styles.backButtonText, { color: theme.colors.accentText }]}>
          ← Back to Recipes
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    padding: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  version: {
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  featureList: {
    marginLeft: 10,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 6,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  techBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    fontSize: 14,
  },
  backButton: {
    padding: 16,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});