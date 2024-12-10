import React from 'react';
import { View, Text, TextInput,StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
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
            <View style={styles.inputContainer}>
                <Ionicons name="search-outline" size={20} color="#060527" style={styles.icon} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Search"
                        placeholderTextColor="#060527"
                        />

            </View>
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <Ionicons name="person-outline" size={22} color="#1E1E1E"marginTop={3}/>
                    <Text style={[styles.titleText2,{marginLeft:'5%',fontSize:20, color:"#1E1E1E"}]}>Account</Text>
                    <TouchableOpacity onPress={() => router.push('/home')}>
                        <Ionicons name="chevron-forward-outline" size={22} color="#1E1E1E" marginLeft='68%' marginTop={4}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <Ionicons name="notifications-outline" size={22} color="#1E1E1E"marginTop={3}/>
                    <Text style={[styles.titleText2,{marginLeft:'5%',fontSize:20, color:"#1E1E1E"}]}>Notifications</Text>
                    <TouchableOpacity onPress={() => router.push('/home')}>
                        <Ionicons name="chevron-forward-outline" size={22} color="#1E1E1E" marginLeft='61%' marginTop={4}/>
                    </TouchableOpacity>                
                </View>
                <View style={styles.container2}>
                    <Ionicons name="eye-outline" size={22} color="#1E1E1E"marginTop={3}/>
                    <Text style={[styles.titleText2,{marginLeft:'5%',fontSize:20, color:"#1E1E1E"}]}>Appearance</Text>
                    <TouchableOpacity onPress={() => router.push('/home')}>
                        <Ionicons name="chevron-forward-outline" size={22} color="#1E1E1E" marginLeft='62%' marginTop={4}/>
                    </TouchableOpacity>                
                </View>
            </View>


          
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
          <Ionicons name="cube-outline" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/questionnaire')}>
          <Ionicons name="document-text" size={24} color="#8D8DA6" />
          <Text style={[styles.navText,{color:"#8D8DA6"}]}>Questionnaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/messages')}>
          <Ionicons name="chatbubbles" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} >
          <Ionicons name="cog-outline" size={24} color="#0300A2" />
          <Text style={[styles.navText,{color:"#0300A2"}]}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    container1:{
        paddingTop: '5%',
        marginLeft: '2%' ,
        flexDirection: 'column',         
      },
      container2:{
        paddingTop: '5%',
        marginLeft: '2%' ,
        flexDirection: 'row',
        marginBottom:'4%'         
      },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#0300A2', // Blue border color
        borderWidth: 2,
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: '5%',
        marginTop: '35%', 
        marginLeft:'0%'
      },
      inputText: {
        fontSize: 16,
        fontWeight: '300',
        marginLeft:'4%'
    
      },
    
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
