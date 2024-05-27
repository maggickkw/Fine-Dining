import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const LikeIcon = ({handlePress}) => {
  return (
   <TouchableOpacity onPress={handlePress}>
        <Ionicons name='star-outline' size={24} color='white' />
   </TouchableOpacity>
  )
}

export default LikeIcon

const styles = StyleSheet.create({

})