import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteinerHome:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
    containerText:{
        marginTop:70,
        marginBottom:50,
        fontSize:25,
        fontWeight:"bold",
        color:"#3F3D56"
    },
    containerButtom:{
        borderRadius:1,
        backgroundColor:"#3F3D56",
        width:400,
        height:100,
        alignItems:"center",
        justifyContent:"center",
        flexGrow:1,
    },
    SOS:{
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    },
    Buttom:{
        backgroundColor:"#343245",
        width:220,
        height:60,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    emergencyContainer: {
        flex: 1,
        backgroundColor: "#3F3D56",
        alignItems: "center",          
        justifyContent: "center",      
        padding: 20, 
        width:500,                
    },
    emergencyText: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",          
        marginBottom: 20            
    },
    cancelButton: {
        backgroundColor: "#343245",
        borderRadius: 5,
        padding: 15,                   
        minWidth: 200                 
    },
    cancelText: {
        color: "white",
        textAlign: "center"            
    }
    
});

export default styles;
