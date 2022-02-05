import React, {useState} from 'react'
import {View} from "react-native";
import ExplodingHeart from "./components/ExplodingHeart";


export const Application = ({}) => {
    const [isFavourite, setIsFavourite] = useState(false)

    return (
        <View style={{flex: 1, backgroundColor: 'rgb(12,11,11)',justifyContent: 'center'}}>
            <ExplodingHeart width={500} status={isFavourite} onChange={(e) => setIsFavourite(e)}/>
        </View>
    )

}