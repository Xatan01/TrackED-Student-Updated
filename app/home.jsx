import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { PieChart } from 'react-native-gifted-charts';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({ navigation }) {
  const router = useRouter(); 
  const [assignmentStatus, setAssignmentStatus] = useState('In Progress');

  useEffect(() => {
    // Retrieve the assignment status from AsyncStorage
    const fetchStatus = async () => {
      const status = await AsyncStorage.getItem('assignmentStatus');
      setAssignmentStatus(status === 'View More' ? 'View More' : 'In Progress');
    };
    fetchStatus();
  }, []);
  
  // Define fixed data for the pie chart
  const quesData = [
    { value: 1, color: '#0A0F38', label: 'Completed' },
    { value: 2, color: '#152C65', label: 'In Progress' },
  ];

  const handleAssignmentPress = () => {
    // Navigate based on assignment status
    if (assignmentStatus === 'In Progress') {
      router.push('/questions');
    } else if (assignmentStatus === 'View More') {
      router.push('/mathexplain');
    }
  };

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
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
        <TouchableOpacity style={styles.container1} onPress={handleAssignmentPress}>
        <Text style={styles.titleText3}>Last Seen Questionnaire</Text>
            <View style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>Math Assignment 1</Text>
                <Text style={styles.Text2}>Due: Tomorrow 2PM</Text> 
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{assignmentStatus}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.container1}>
            <Text style={styles.titleText3}>Today's Classes</Text>
             {/* ScrollView for horizontal scrolling */}
            <ScrollView horizontal contentContainerStyle={styles.classesContainer}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.container3}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>Math</Text>
                <Text style={styles.Text2}>Classroom 1</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>12PM-2PM</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container3}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>English</Text>
                <Text style={styles.Text2}>Classroom 1</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>12PM-2PM</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button2} onPress={() => router.push('/schedule')}>
            <Text style={styles.buttonText2}>Class Schedule</Text>
          </TouchableOpacity>
          <View style={styles.container4}>
            <Text style={styles.titleText3}>Participation Progress</Text>
            <View style={styles.chartAndLegend}>
              <View style={styles.leftChart}>
                {/* Fixed Pie Chart */}
                <PieChart
                  strokeColor="white"
                  strokeWidth={0.5}
                  data={quesData}  // Fixed data for the pie chart
                  showGradient={false}  // Optional: Set to false for a flat color
                  sectionAutoFocus={false}  // Optional: Prevent section focusing
                  radius={100}  // Fixed radius
                />
              </View>
              {/* Legend */}
              <View style={styles.legendContainer}>
                {quesData.map((item, index) => (
                  <View key={index} style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                    <Text style={styles.legendText}>{item.label} - {item.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* improvement*/}
        <View style={[styles.container4, { marginLeft: 25, marginTop: '-33%'}]}>
        <Text style={styles.titleText3}>Weak Topics</Text>
            <View style={[styles.container5, { flexDirection:'column' }]}>
                <Text style={styles.Text1}>MATH</Text>
              <View style={[{flexDirection:'row'}]}>
              <View style={styles.button3}>
                <Text style={styles.buttonText}>Calculus</Text>
              </View>
              <View style={[styles.button3,{marginLeft:10}]}>
                <Text style={styles.buttonText}>Radicals</Text>
              </View>
              </View>
            </View>
            <View style={[styles.container5, { flexDirection:'column' }]}>
                <Text style={styles.Text1}>English</Text>
              <View style={[{flexDirection:'row'}]}>
              <View style={styles.button3}>
                <Text style={styles.buttonText}>Essay Writing</Text>
              </View>
              <View style={[styles.button3,{marginLeft:10}]}>
                <Text style={styles.buttonText}>Grammar</Text>
              </View>
              </View>
            </View>
          </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cube-outline" size={24} color="#0300A2" />
          <Text style={[styles.navText,{color:"#0300A2"}]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/questionnaire')}>
          <Ionicons name="document-text" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Questionnaire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/messages')}>
          <Ionicons name="chatbubbles" size={24} color="#8D8DA6" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/settings')}>
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
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',  // White background for the box
    borderRadius: 15,         // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,      
    position: 'absolute',
    width: '100%',
    height: 118,
    zIndex: 1,               // Ensures it stays above other content
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
  },
  content:{
    marginLeft:'3%',
    flexDirection: 'column',
  },  
  titleTextContainer: {
    flexDirection: 'column',  // Stack titleText and titleText2
    justifyContent: 'left',
    marginLeft:'-35%',
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '200',  
    color: '#7C7C7C',
    paddingTop: '12%',
  },
  titleText2: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500', 
    color: '#060527',
    paddingTop: 3,    
  },
  titleText3:{
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#060527',
  },
  chartAndLegend: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    justifyContent: 'flex-start',
  },
  leftChart: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 20, 
    marginBottom:15, 
    marginTop:10,  
  },
  scrollViewContent:{
    paddingBottom: 120,

  },
  container1:{
    paddingTop: '35%',
    marginLeft: '2%' ,
    flexDirection: 'column', 
    marginBottom:'-30%',
    
  },
  container2:{
    borderRadius: 35,
    backgroundColor:'#0A0932',
    width: '90%',
    paddingVertical: '10%', // Adjust the padding for better spacing
    marginTop:13,
    flexDirection: 'row',  // Change to row to align text and button horizontally
    alignItems: 'flex-start',
    paddingLeft: 20,
    justifyContent: 'space-between', // Ensure text and button are spaced apart
  },
  container3:{
    borderRadius: 30,
    backgroundColor:'#153B78',
    width: '80%',
    paddingVertical: '8%', // Adjust the padding for better spacing
    marginTop:13,
    flexDirection: 'row',  // Change to row to align text and button horizontally
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginRight:15,
    justifyContent: 'space-between', // Ensure text and button are spaced apart
  },
  classesContainer: {
    flexDirection: 'row', // Align cards horizontally
    paddingRight: '80%', // Optional: add some spacing around cards
  },
  container4:{
    paddingTop: '35%',
    marginLeft: '2%' ,
    flexDirection: 'column', 
    marginTop:'-30%',
  },
  container5:{
    borderRadius: 30,
    backgroundColor:'#303972',
    width: '90%',
    paddingVertical: '8%', // Adjust the padding for better spacing
    marginTop:13,
    flexDirection: 'row',  // Change to row to align text and button horizontally
    alignItems: 'flex-start',
    paddingLeft: 20,
    justifyContent: 'space-between', // Ensure text and button are spaced apart
  },
  textContainer: {
    flexDirection: 'column',  // Stack the texts vertically
  },
  Text1:{
    fontSize: 20,
    fontStyle:'normal',
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontWeight: '700', 
  },
  Text2:{
    fontSize: 15,
    fontStyle:'normal',
    fontFamily: 'Roboto',
    color: '#8D8DA6',
  },
  button2:{
    backgroundColor: '#060527',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 35,
    marginLeft: 'auto',
    marginRight:'10%', 
    alignSelf: 'flex-start',
    marginTop:'33%',
    zIndex:3
  },
  buttonText2: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  button3: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop:20, 
    alignSelf: 'flex-start', // Ensure the button stays aligned to the right of its container
  },
  button: {
    zIndex: 10, 
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight:'5%', 
    alignSelf: 'flex-start', // Ensure the button stays aligned to the right of its container
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  bellIcon: {
    marginLeft: 'auto',
    paddingTop: '15%',
    marginRight:'10%',
  },
  personIcon:{
    marginRight: 'auto',
    paddingTop: '12%',
  },
  legendContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop:50,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  legendText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#060527',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    addingTop: 10,
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
});
