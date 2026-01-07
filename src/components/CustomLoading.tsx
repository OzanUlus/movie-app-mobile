import { ActivityIndicator, Text, View } from 'react-native'
import React from 'react'
import colors from '../theme/color'
import { vs } from 'react-native-size-matters'

const CustomLoading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size={"large"} />
                    <Text
                        style={{
                            color: colors.textColor,
                            marginTop: vs(4),
                            textAlign: "center"
                        }}>
                        Loading
                    </Text>
                </View>

  )
}

export default CustomLoading

