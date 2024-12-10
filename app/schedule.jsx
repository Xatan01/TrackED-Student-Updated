import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';

export default function Dashboard({ navigation }) {
    const router = useRouter(); 

  return (
    <View style={styles.container}>
      {/* Top panel with title container */}
      <View style={styles.titleContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#153B78" style={styles.personIcon} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Let's Study,</Text>
          <Text style={styles.titleText2}>Timmy</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#BF2D2D" style={styles.bellIcon} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image 
            source={require('../assets/images/schedule.png')} 
            style={styles.backgroundImage} 
          />
          <TouchableOpacity style={styles.button2} onPress={() => router.push('/schedule')}>
            <Text style={styles.buttonText2}>Download</Text>
          </TouchableOpacity>

          <View style={styles.container1}>
            <Text style={styles.titleText3}>Today's Classes</Text>
            {/* ScrollView for horizontal scrolling */}
            <ScrollView horizontal contentContainerStyle={styles.classesContainer}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.container3}>
                <View style={styles.textContainer}>
                  <Text style={styles.Text1}>Ms Jane Doe</Text>
                  <Text style={styles.Text2}>Math, Staff Room 1</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>jane@sch.com</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.container3}>
                <View style={styles.textContainer}>
                  <Text style={styles.Text1}>Mr Smith</Text>
                  <Text style={styles.Text2}>English, Staff Room 2</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>smith@sch.com</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cube-outline" size={24} color="#8D8DA6" />
          <Text style={[styles.navText, { color: "#8D8DA6" }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Content')}>
          <Ionicons name="document-text" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Questionnaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Forum')}>
          <Ionicons name="chatbubbles" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="cog-outline" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    marginTop: '30%',
    marginLeft: '20%',
  },
  container1: {
    paddingTop: '10%',
    marginLeft: '2%',
    flexDirection: 'column',
    marginBottom: '10%', // Adjust to provide enough space at the bottom
  },
  titleText3: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#060527',
  },
  container3: {
    borderRadius: 30,
    backgroundColor: '#193F7B',
    width: '60%',
    paddingVertical: '8%',
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  classesContainer: {
    flexDirection: 'row',
    paddingRight: '40%',
  },
  textContainer: {
    flexDirection: 'column',
  },
  Text1: {
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  Text2: {
    fontSize: 15,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    color: '#8D8DA6',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: '5%',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  button2: {
    backgroundColor: '#060527',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 35,
    marginLeft: 'auto',
    marginRight: '10%',
    alignSelf: 'flex-start',
    marginTop: '10%',
  },
  buttonText2: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    position: 'absolute',
    width: '100%',
    height: 118,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
  },
  content: {
    marginLeft: '3%',
    flexDirection: 'column',
  },
  titleTextContainer: {
    flexDirection: 'column',
    justifyContent: 'left',
    marginLeft: '-35%',
  },
  titleText: {
    fontSize: 14,
    fontWeight: '200',
    color: '#7C7C7C',
    paddingTop: '12%',
  },
  titleText2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#060527',
    paddingTop: 3,
  },
  scrollViewContent: {
    paddingBottom: 10, // Remove excessive bottom padding
  },
  bottomNavigation: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#8D8DA6',
    marginTop: 5,
    textAlign: 'center',
  },
  personIcon: {
    marginRight: 'auto',
    paddingTop: '12%',
  },
  bellIcon: {
    marginLeft: 'auto',
    paddingTop: '15%',
    marginRight: '10%',
  },
});
