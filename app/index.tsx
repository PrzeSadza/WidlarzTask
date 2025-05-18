import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CATEGORIES = ['React Native', 'React', 'Typescript', 'Javascript'];

const MOCK_DATA: Record<string, { id: string; description: string; date: string }[]> = {
  'React Native': [
    { id: '1', description: 'Lorem ipsum dolor.', date: '2024-05-12' },
    { id: '2', description: 'Lorem ipsum.', date: '2024-05-13' },
    { id: '3', description: 'Lorem ipsum dolor sit.', date: '2024-05-14' },
  ],
  React: [
    { id: '4', description: 'Lorem ipsum dolor.', date: '2024-05-10' },
    { id: '5', description: 'Lorem ipsum.', date: '2024-05-11' },
  ],
  Typescript: [
    { id: '6', description: 'Lorem ipsum dolor.', date: '2024-05-08' },
    { id: '7', description: 'Lorem ipsum.', date: '2024-05-09' },
  ],
  Javascript: [
    { id: '8', description: 'Lorem ipsum dolor.', date: '2024-05-06' },
    { id: '9', description: 'Lorem ipsum.', date: '2024-05-07' },
  ],
};

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SECTION_HEIGHT = SCREEN_HEIGHT * 0.25;

export default function MainScreen() {
  const router = useRouter();

  const handleSearchSubmit = (text: string) => {
    router.push({ pathname: '/search', params: { category: text } });
  };

  const handleShowMore = (category: string) => {
    router.push({ pathname: '/search', params: { category } });
  };

  const renderVideoItem = ({ item }: { item: { id: string; description: string; date: string } }) => (
    <View style={styles.videoItem}>
      <View style={styles.videoPlaceholder} />
      <Text style={styles.videoDescription}>{item.description}</Text>
      <Text style={styles.videoDate}>{item.date}</Text>
    </View>
  );

  const renderSection = (category: string, index: number) => (
    <View key={category} style={[styles.sectionContainer, { height: SECTION_HEIGHT }]}>
      {index !== 0 && <View style={styles.sectionDivider} />}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{category}</Text>
        <TouchableOpacity onPress={() => handleShowMore(category)}>
          <Text style={styles.showMore}>Show More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={MOCK_DATA[category]}
        keyExtractor={(item) => item.id}
        renderItem={renderVideoItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );

  return (
    <View style={styles.screen}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
          onSubmitEditing={(e) => handleSearchSubmit(e.nativeEvent.text)}
        />
        <TouchableOpacity style={styles.settingsIcon} onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="#2b2d42" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContent} contentContainerStyle={{ paddingBottom: 80 }}>
        {CATEGORIES.map((category, idx) => renderSection(category, idx))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} color="rgba(43, 45, 66, 1)" />
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/search')}>
          <Ionicons name="search" size={24} color="#ffffff" />
          <Text style={styles.navLabelInactive}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  settingsIcon: {
    marginLeft: 10,
  },
  scrollContent: {
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    marginBottom: 8,
  },
  sectionDivider: {
    borderTopWidth: 2,
    borderColor: '#000',
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  showMore: {
    color: '#007bff',
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  videoItem: {
    width: 180,
    marginRight: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'flex-start',
    shadowColor: '#00000020',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  videoPlaceholder: {
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 6,
  },
  videoDescription: {
    fontSize: 13,
    color: '#333',
    marginTop: 6,
  },
  videoDate: {
    fontSize: 11,
    color: '#777',
    textAlign: 'right',
    marginTop: 4,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    backgroundColor: 'rgba(141, 153, 174, 1)',
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabelActive: {
    color: 'rgba(43, 45, 66, 1)',
    fontSize: 12,
    marginTop: 2,
  },
  navLabelInactive: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 2,
  },
});