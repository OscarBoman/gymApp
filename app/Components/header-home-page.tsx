import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function Header(){
    const weekDay = ['Söng','Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']; 
    const months = [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December",
      ];
    const date = new Date(); 
    const currentDay = weekDay[date.getDay()]; 
    const currentDate = date.getDate();  
    const currentMonth = months[date.getMonth()]; 
    return(
        <View style= {styles.container}>
            <Text style={styles.dateText}>{currentDay} {currentDate} {currentMonth}</Text>
            <View style= {styles.innerContainer}>
                
                <Image source={require('../../assets/images/cbum.jpg')} style = {styles.profileImg}></Image>
               
                
                <Text style= {styles.greetingText}>Hej Oscar! 🦍</Text>
                <View style={styles.settingsImgContainer}>
                <Pressable>
                    <Image style = {styles.settingsImg} source={require('../../assets/images/settings (1).png')}></Image>
                </Pressable>
                 </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(15, 19, 40, 0.3)',
        height: 75,
        width: '96%',
        justifyContent:'center',
        borderRadius:20,
        marginTop: 20,
    },
    dateText:{
        color: 'gray',
        fontWeight:'bold',
        marginLeft: 75,
        top: 8,
        position:'absolute',
    },
    innerContainer: {
        flexDirection:'row',
        alignItems:'center',
        gap: 10,
        marginLeft: 15,
        
        
    },
    greetingText: {
        color:'#fff',
        fontSize: 30,
        fontWeight:'bold',
        marginRight: 85,
        marginTop:3,
    },
        
    profileImg: {
        height: 50,
        width: 50,
        borderRadius:'50%'
    },
    settingsImgContainer: {
        backgroundColor: 'rgba(255,255,255,0.17)',
        padding: 7,
        borderRadius: '50%',

    },
    settingsImg: {
       height:25,
       width:25,
    },
        
        
        
})