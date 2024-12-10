import React , {useState} from 'react';
import { View,Linking, Text, StyleSheet, Modal,TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';

export default function Dashboard({ navigation }) {
  const router = useRouter(); 
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      {/* Top panel with title container */}
      <View style={styles.titleContainer}>
        <Ionicons name="person-circle-outline" size={50} color="#153B78" style={styles.personIcon} />
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Let's Study,</Text>
          <Text style={styles.titleText2}>Timmy</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#153B78" style={styles.bellIcon} />
      </View>
      {/* Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>

        <View style={styles.container1}>
            <View style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>English Assignment 1</Text>
                <Text style={styles.Text2}>Due: 11/11/2024 2PM</Text> 
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Completed</Text>
              </View>
            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                    <Text style={[styles.ques,{fontWeight:'600'}]}>Question 1</Text>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tag}>Literary Devices</Text>
                    </View>
                </View>
                <Text style={[styles.res,{fontWeight:'600'}]}>Explanation:</Text>
                <Text style={styles.res}>A metaphor is a figure of speech that describes an object or action in a way that isn’t literally true but helps explain an idea or make a comparison. For example, 'Time is a thief.</Text>
                <Text style={[styles.res,{fontWeight:'600'}]}>Resource:</Text>
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('https://literarydevices.net/metaphor/')}
                >
                    Understanding Metaphors - Literary Devices
                </Text>
            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                    <Text style={[styles.ques,{fontWeight:'600'}]}>Question 2</Text>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tag}>Poetry Analysis</Text>
                    </View>
                </View>
                <Text style={[styles.res,{fontWeight:'600'}]}>Explanation:</Text>
                <Text style={styles.res}>Imagery in poetry refers to the use of vivid and descriptive language that appeals to the senses. It helps readers visualize the poem’s scenes and experience emotions.</Text>
                <Text style={[styles.res,{fontWeight:'600'}]}>Resource:</Text>
                <Text
                    style={styles.link}
                >
                     Introduction to Imagery in Poetry - Poetry Foundation
                </Text>
            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                    <Text style={[styles.ques,{fontWeight:'600'}]}>Question 3</Text>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tag}>Shakespeare</Text>
                    </View>
                </View>
                <Text style={[styles.res,{fontWeight:'600'}]}>Explanation:</Text>
                <Text style={styles.res}>In 'Romeo and Juliet,' dramatic irony occurs when the audience knows something the characters do not, such as Juliet's fake death, which Romeo believes to be real.</Text>
                <Text style={[styles.res,{fontWeight:'600'}]}>Resource:</Text>
                <Text
                    style={styles.link}
                >
                    Guide to Shakespeare’s Dramatic Irony - Royal Shakespeare Company
                </Text>
            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                    <Text style={[styles.ques,{fontWeight:'600'}]}>Question 4</Text>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tag}>Grammar</Text>
                    </View>
                </View>
                <Text style={[styles.res,{fontWeight:'600'}]}>Explanation:</Text>
                <Text style={styles.res}>A subject-verb agreement rule states that subjects and verbs must agree in number. For example, 'She walks' vs. 'They walk.</Text>
                <Text style={[styles.res,{fontWeight:'600'}]}>Resource:</Text>
                <Text
                    style={styles.link}
                >
                   Subject-Verb Agreement Rules - Purdue OWL
                </Text>
            </View>
            <View style={[styles.container2,{marginTop:'15%'}]}>
              <View style={styles.textContainer}>
                <Text style={[styles.Text1,{fontWeight:'200',marginRight:'5%'}]}>English can be a world of words and ideas—each story, poem, or sentence, a new adventure. Keep exploring, you're writing your own story every day!</Text>
              </View>
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
          <Ionicons name="document-text" size={24} color="#0300A2" />
          <Text style={[styles.navText,{color:"#0300A2"}]}>Questionnaire</Text>
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

const styles = StyleSheet.create(
{
    container3:{
        marginTop:'5%',
        flexDirection: 'column',
        marginLeft:'2%'
    },
    container4:{
        flexDirection: 'row',
    },
    res:{
        color: '#060527',
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:'250',
        marginTop:5,
        marginRight:25,
    },
    link:{
        fontSize: 16,
        color: '#0000FF', 
        textDecorationLine: 'underline',
    },
    ques:{
        color: '#060527',
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight:'250',
        marginTop:'2%'
    },
    tag:{
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'230',
        color:'#ffffff',
    },
    tagcontainer:{
        backgroundColor: '#4450A1',
        borderRadius:20,
        marginLeft:'10%',
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:'2%'

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

  scrollViewContent:{
    paddingBottom: 300,

  },
  container1:{
    paddingTop: '35%',
    marginLeft: '2%' ,
    flexDirection: 'column', 
    marginBottom:'-30%',
    
  },
  container2:{
    borderRadius: 35,
    backgroundColor:'#193F7B',
    width: '90%',
    paddingVertical: '10%', // Adjust the padding for better spacing
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