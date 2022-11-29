import React from "react";
import { View,Text,Image,ScrollView } from "react-native";


export default function Start(){

    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={require("../../assets/icons/logo33[.png")}
                        />
                    <Text>
                        Vamos transformar sua vida {"/n"} em jogo , buscando sempre   {"/n"}o melhor nivel.
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}