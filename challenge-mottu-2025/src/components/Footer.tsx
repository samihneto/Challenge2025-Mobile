// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
// import { useRouter } from 'expo-router';
// import { MaterialIcons } from '@expo/vector-icons';

// export default function Footer() {

//     const router = useRouter();

//     return (
//         <View style={styles.footer}>
//             <TouchableOpacity
//                 style={styles.footerButton}
//                 onPress={() => router.push('/Dashboard')}
//             >
//                 <MaterialIcons name="home" size={30} color="#111914" />
//                 <Text style={styles.buttonText}>Dashboard</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//                 style={styles.footerButton}
//                 onPress={() => router.push('./Profile')}
//             >
//                 <MaterialIcons name="account-circle" size={30} color="#111914" />
//                 <Text style={styles.buttonText}>Perfil</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     footer: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         backgroundColor: '#fff',
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         borderTopWidth: 1,
//         borderTopColor: '#ccc',
//     },
//     footerButton: {
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#111914'
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#111914',
//     },
// });
