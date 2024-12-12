import React , {useState} from 'react';
import { View, Text, StyleSheet, Modal,TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { PieChart } from 'react-native-gifted-charts';
import { useRouter } from 'expo-router';

export default function Dashboard({ navigation }) {
  const router = useRouter(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [tags, setTags] = useState(['English']); // Initialize with the "English" tag

  const removeTag = (tag) => {
    setTags(tags.filter(t => t !== tag));
    router.push('/questionnaire');
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
        <View style={styles.inputContainer}>
        <TextInput
              style={styles.inputText}
              placeholder="Search Assignment Questionnaires"
              placeholderTextColor="#060527"
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicons name="options-outline" size={20} color="#060527" style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.notificationDot} />
        </View>
         {/* Tag Display */}
         <View style={styles.tagsContainer}>
            {tags.map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
                <TouchableOpacity onPress={() => removeTag(tag)}>
                  <Ionicons name="close" size={16} color="#FFFFFF" style={styles.tagCloseIcon} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        {/* Filter Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Options</Text>
            
            {/* Example Filters */}
            <TouchableOpacity style={styles.filterOption} onPress={() => router.push('/Math')}>
              <Text style={styles.filterText}>Math</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={() => router.push('/English')}>
              <Text style={styles.filterText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={() => router.push('/Biology')}>
              <Text style={styles.filterText}>Biology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption} onPress={() => router.push('/questionnaire')}>
              <Text style={styles.filterText}>All</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

        <View style={styles.container1}>
            <View style={styles.container2}>
              <View style={styles.textContainer}>
                <Text style={styles.Text1}>English Assignment 1</Text>
                <Text style={styles.Text2}>Due: 11/11/2024 2PM</Text> 
              </View>
              <TouchableOpacity style={[styles.button, { backgroundColor: 'lightblue' }]} onPress={()=> router.push('/englishexplain')}>
                <Text style={styles.buttonText}>View More</Text>
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

const styles = StyleSheet.create({
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        paddingHorizontal: 15,
        marginLeft:-10,
        marginBottom:-10,
      },
      tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#060527',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 0,
        marginBottom: 8,
      },
      tagText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginRight: 5,
      },
      tagCloseIcon: {
        paddingLeft: 5,
      },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
      },
      filterOption: {
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      },
      filterText: {
        fontSize: 16,
        color: '#060527',
      },
      closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#060527',
        borderRadius: 5,
      },
      closeButtonText: {
        color: '#fff',
        fontSize: 16,
      },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#0300A2', // Blue border color
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: '5%',
    marginTop: '40%', 
    marginLeft:'0%'
  },
  inputText: {
    fontSize: 16,
    fontWeight: '300',
  },
  icon: {
    marginRight: 5,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000', // Red color for the notification dot
    position: 'absolute',
    right: 15, // Adjust to position near the icon
    top: 10,
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
    paddingBottom: 120,

  },
  container1:{
    paddingTop: '5%',
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
