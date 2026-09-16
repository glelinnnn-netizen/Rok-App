//recipe-app/app/about.tsx
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';

export default function About() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>👨‍🍳</Text>
        <Text style={styles.title}>Recipe Book App</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About This App</Text>
        <Text style={styles.text}>
          This is a simple recipe book app built with React Native and Expo Router.
          It showcases basic navigation, dynamic routes, and list rendering.
        </Text>

        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featureList}>
          <Text style={styles.featureItem}>✅ Browse recipe collection</Text>
          <Text style={styles.featureItem}>✅ View detailed recipes</Text>
          <Text style={styles.featureItem}>✅ Easy navigation</Text>
          <Text style={styles.featureItem}>✅ Clean and simple design</Text>
        </View>

        <Text style={styles.sectionTitle}>Tech Stack</Text>
        <View style={styles.techStack}>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>React Native</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>Expo</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>Expo Router</Text>
          </View>
          <View style={styles.techBadge}>
            <Text style={styles.techText}>TypeScript</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back to Recipes</Text>
      </TouchableOpacity>
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
    color: '#fff',
  },
  version: {
    fontSize: 14,
    color: '#ffe0d0',
    marginTop: 4,
  },
  content: {
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  featureList: {
    marginLeft: 10,
  },
  featureItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  techBadge: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    fontSize: 14,
    color: '#555',
  },
  backButton: {
    backgroundColor: '#f4511e',
    padding: 16,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});