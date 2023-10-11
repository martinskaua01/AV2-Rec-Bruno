import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export function List() {
  
  const navigation = useNavigation();
  
  function voltar(){
    navigation.goBack()
  }
  const footballPlayers = [
    {
      name: "Cristiano Ronaldo",
      position: "Forward",
      age: 36,
    },
    {
      name: "Lionel Messi",
      position: "Attacking Midfielder",
      age: 34,
    },
    {
      name: "Neymar Jr.",
      position: "Forward",
      age: 29,
    },
    {
      name: "Kylian Mbappé",
      position: "Forward",
      age: 23,
    },
    {
      name: "Sergio Ramos",
      position: "Defender",
      age: 35,
    },
    {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      age: 30,
    },
    {
      name: "Robert Lewandowski",
      position: "Forward",
      age: 32,
    },
    {
      name: "Virgil van Dijk",
      position: "Defender",
      age: 30,
    },
    {
      name: "Luka Modric",
      position: "Midfielder",
      age: 35,
    },
    {
      name: "Erling Haaland",
      position: "Forward",
      age: 21,
    },
  ];

  const renderItem = ({ item }) => (
    <View>
    <Text style={styles.text}>{item.name}</Text>
    <Text style={styles.text}>{item.position}</Text>
    <Text style={styles.text}>{item.age}</Text>
    </View>
  )

  return(
    <View>
       <Text style={styles.title}>Lista de jogadores</Text>
      <FlatList 
      style={styles.list}
      data={footballPlayers}
      renderItem={renderItem}
      ></FlatList>
         <TouchableOpacity style={styles.btn} onPress={voltar}>
        <Text style={styles.btnTxt}>voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
})