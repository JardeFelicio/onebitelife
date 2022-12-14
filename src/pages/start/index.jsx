import React from "react";
import { View,Text,Image,ScrollView,StyleSheet } from "react-native";


export default function Start(){

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems:"center"}}>
                    <Image
                        source={require("../../assets/icons/logo33[.png")}
                        style= {styles.logo}
                        />
                    <Text style={styles.descrption}>
                        Vamos transformar sua vida {"/n"} em jogo , buscando sempre   {"/n"}o melhor nivel.
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundcolor:"rgba(21,21,21,0.98)"
    },
    logo:{
        width:300,
        heigth:60,
        marginTop:60,
        marginBotton:20,

    },
    descrption:{
        color: "#FFFFFF",
        fontSize:20,
        textAlign:"center",
        marginVertical:60,
    }

})