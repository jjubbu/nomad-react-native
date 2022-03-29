import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,Alert, Switch,FlatList } from 'react-native';

const FlatData = [
  {
    id:"1",
    title:"hello!",
    color:"red"
  },
  {
    id:"2",
    title:"my name is",
    color:"green"
  },
  {
    id:"3",
    title:"Seon-A",
    color:"pink"
  }
]

const FlatItem = ({title, color}) =>(
  <View style={FlatStyles(color).container}>
    <Text>{title}</Text>
  </View>
 
);

// 무조건 {item} 이 들어가야함. 이게 객체 하나하나를 가리킴!
const FlatBox = ({item}) => (
  <FlatItem title={item.title} color={item.color}/>
);

const FlatDirect = ({item}) => {
  <View style={FlatStyles(item.color).container}>
    <Text>{item.title}</Text>
  </View>
}

export default function App() {
  const [switchValue, setSwitchValue] = useState({val:false, text:"toggle off"});
  const alertFunc = ()=>{
    Alert.alert('good!');
  }

  const switchValueFunc = () =>{
    switchValue.val? setSwitchValue({val:false,text:"toggle off"}):setSwitchValue({val:true,text:"toggle on!"});
  }

  


  
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{
        flex: 1,
        backgroundColor: 'pink',
        // 이런 식으로 이 안에 넣어서 사용할 수도 있음.
      }}/>
        <Text style={styles.text}>텍스트</Text> 

        {/* 주의.. url 아니고 uri 임 실화냐?? */}
        <Image style={styles.image} source={{uri:'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'}}/>
        
        {/* 대문자로 출력된다...기본인가?! */}
        <Button onPress={alertFunc} title="hello this is test" color="blue" />
        {/* 이건 핸드폰 상단 바를 의미한다. */}
        {/* auto 자동, light 흰색 ,dark 어두운색.. */}
        <StatusBar style="light" />

        {/* 토글 스위치는 이렇게. 스위치의 value와 value를 변화시키는 함수 필요! */}
        <Text style={styles.toggleText}>{switchValue.text}</Text>
        <Switch  trackColor={{false:"gray", true:"green"}} thumbColor={{false:"lightGray", true:"lightGreen"}} value={switchValue.val} onValueChange={switchValueFunc}/>

        {/* 데이터를 목록으로 뽑아줄때! */}
        {/* renterItem 으로 목록 안의 하나하나를 item:{} 의 형태로 준다! */}
        <FlatList data={FlatData} renderItem={FlatBox} keyExtractor={i => i.index}/>

        {/* 왜..이렇게 바로 내려주는건 안되는지? 이유를 찾아봐야할듯. */}
        <FlatList data={FlatData} renderItem={FlatDirect} keyExtractor={i=>i.id}/>
    </View>
    
  );
}

// StyleSheet 는 아주 좋은 자동완성 기능을 제공함
const styles = StyleSheet.create({
  // styles 나 container는 딱히 특정한 명칭을 따를 필요 없음 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
  },
  image:{
    width:50,
    height:50
  },
  toggleText:{
marginTop:50
  }
});

const styles2 = {
  container:{
    // 이런 식으로도 사용할 순 있음.
  }
}

const FlatStyles = (bg) => StyleSheet.create({
  container:{
backgroundColor: bg?bg:"gray"
  }
})
