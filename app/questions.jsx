import React , {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Modal,TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router';
import Slider from '@react-native-community/slider'; //download
import AsyncStorage from '@react-native-async-storage/async-storage'; //download

export default function Dashboard({ navigation }) {
  const router = useRouter(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [sliderValue3, setSliderValue3] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Check AsyncStorage for the assignment status when the component mounts
    const checkCompletionStatus = async () => {
      const status = await AsyncStorage.getItem('assignmentStatus');
      setIsCompleted(status === 'View More');
    };
    checkCompletionStatus();
  }, []);
  
    // Function to open the modal with a specific message
    const openModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };
      // Function to close the modal without navigating away
    const closeModal = () => {
        setModalVisible(false);
    };
    
      // Function to close the modal and navigate to home
      const handleConfirm = async () => {
        setModalVisible(false);
        await AsyncStorage.setItem('assignmentStatus', 'View More'); // Store "completed" status
        setIsCompleted(true); // Update state
        router.push('/home');
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
        <Ionicons name="notifications-outline" size={24} color="#153B78" style={styles.bellIcon} />
      </View>
      {/* Content */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>

        <View style={styles.container1}>
            <View style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>Math Assignment 1</Text>
                <Text style={styles.Text2}>Due: Tomorrow 2PM</Text> 
              </View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>In Progress</Text>
              </View>
            </View>
            <View style={styles.container3}>
                <Text style={[styles.ques,{fontWeight:'600', marginRight:'5%'}]}>
                    Based on the assignment questions, fill in your answers.
                </Text>
                <Text style={[styles.ques,{fontSize:'17',fontWeight:'400', marginRight:'5%'}]}>
                    Guiding questions: 
                </Text>
                <Text style={[styles.res,{fontWeight:'400'}]}>
                   1. Did you get the correct answer?
                </Text>
                <Text style={[styles.res,{fontWeight:'400'}]}>
                   2. Did you have any difficulties solving the question?

                </Text>
            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                    <Text style={[styles.ques,{fontWeight:'600'}]}>Question 1</Text>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tag}>Calculus</Text>
                    </View>
                </View>
                 {/* Slider Component */}
            <View style={styles.sliderContainer}>
              <Ionicons name="happy-outline" size={24} color="#8D8DA6" marginRight={10} />
              <View style={styles.sliderWrapper}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={sliderValue1}
                  onValueChange={(value) => setSliderValue1(value)}
                  minimumTrackTintColor="#4450A1"
                  maximumTrackTintColor="#E1E1E1"
                  thumbTintColor="#FFFFFF"
                />
              </View>
              <Ionicons name="sad-outline" size={24} color="#8D8DA6" marginLeft={10}/>
            </View>
                
            </View>
            <View style={styles.container3}>
            <View style={styles.container4}>
                    <Text style={[styles.ques,{fontWeight:'600'}]}>Question 2</Text>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tag}>Calculus</Text>
                    </View>
                </View>
                 {/* Slider Component */}
            <View style={styles.sliderContainer}>
              <Ionicons name="happy-outline" size={24} color="#8D8DA6" marginRight={10} />
              <View style={styles.sliderWrapper}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={sliderValue2}
                  onValueChange={(value) => setSliderValue2(value)}
                  minimumTrackTintColor="#4450A1"
                  maximumTrackTintColor="#E1E1E1"
                  thumbTintColor="#FFFFFF"
                />
              </View>
              <Ionicons name="sad-outline" size={24} color="#8D8DA6" marginLeft={10}/>
            </View>
            </View>
            
            <View style={styles.container3}>
            <View style={styles.container4}>
                    <Text style={[styles.ques,{fontWeight:'600'}]}>Question 3</Text>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tag}>Calculus</Text>
                    </View>
                </View>
                 {/* Slider Component */}
            <View style={styles.sliderContainer}>
              <Ionicons name="happy-outline" size={24} color="#8D8DA6" marginRight={10} />
              <View style={styles.sliderWrapper}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={sliderValue3}
                  onValueChange={(value) => setSliderValue3(value)}
                  minimumTrackTintColor="#4450A1"
                  maximumTrackTintColor="#E1E1E1"
                  thumbTintColor="#FFFFFF"
                />
              </View>
              <Ionicons name="sad-outline" size={24} color="#8D8DA6" marginLeft={10}/>
            </View>
            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                        <Text style={[styles.ques,{fontWeight:'600'}]}>Question 4</Text>
                        <View style={styles.tagcontainer}>
                            <Text style={styles.tag}>Calculus</Text>
                        </View>
                </View>
                <Text style={styles.subQuestion}>Explain how you solved question 3?</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type your answer here..."
                    placeholderTextColor="#B8B8B8"
                    value={answer}
                    onChangeText={setAnswer}
                    multiline
                />

                <Text style={styles.hintText}>Remember your keywords!</Text>
            </View>
            <View style={styles.container5}>
                {/* Save & Continue Later button */}
                <TouchableOpacity style={[styles.button2,{marginLeft:'4%',paddingHorizontal:'10%'}]} onPress={() => openModal("Your progress has been saved. Do you want to continue later?")}>
                    <Text style={styles.buttonText2}>Save</Text>
                </TouchableOpacity>

                {/* Submit button */}
                <TouchableOpacity style={styles.button2} onPress={() => openModal("Are you sure you want to submit your answers?")}>
                    <Text style={styles.buttonText2}>Submit!</Text>
                </TouchableOpacity>
            </View>
          </View>
          </View>
      </ScrollView>

 {/* Modal Popup */}
 <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Close button in the top-right corner */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>

            <Text style={styles.modalMessage}>{modalMessage}</Text>

            {/* Confirm button */}
            <TouchableOpacity style={styles.modalButton} onPress={handleConfirm}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
      },
      closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
      },
      modalMessage: {
        fontSize: 16,
        color: '#333',
        textAlign: 'left',
        marginBottom: 0,
        marginTop:30,

      },
      modalButton: {
        backgroundColor: '#060527',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
      },
      modalButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
      },
    button2:{
        backgroundColor: '#060527',
        paddingVertical: 15,
        paddingHorizontal: 30,
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
    container5:{
        marginTop:'-15%',
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    textInput: {
        height: 80,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#FFFFFF',
        color: '#1E1E1E',
        textAlignVertical: 'top',
        width:'90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,  
      },
      hintText: {
        fontSize: 14,
        color: '#B8B8B8',
        marginTop: 20,
        fontWeight:'500'
      },
    subQuestion: {
        fontSize: 16,
        color: '#1E1E1E',
        fontFamily:'Roboto',
        marginVertical:15,

      },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 15,
        marginRight:'8%',
      },
      sliderWrapper: {
        flex: 1,
        width: '50%',  // Adjust this width as needed to fit your design
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,  
      },
      slider: {
        width: '100%',  // This ensures the slider takes the full width of its wrapper
      },
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
    paddingBottom: '60%',

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
