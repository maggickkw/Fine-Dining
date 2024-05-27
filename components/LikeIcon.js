import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const LikeIcon = ({handlePress, icon}) => {
  return (
   <TouchableOpacity onPress={handlePress}>
        <Ionicons name={icon} size={24} color='white' />
   </TouchableOpacity>
  )
}

export default LikeIcon

const styles = StyleSheet.create({

})