import { useState } from "react";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./style";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export function NewGroup(){
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [group, setGroup] = useState('');

    async function handleNew(){
        try{
            await groupCreate(group);
            navigation.navigate('players', {group});
        }catch(error){
          console.log(error);
        }
      }
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlight
                    title="Nova Turma"
                    subtitle="Crie a turma para adicionar pessoas"
                />
                <Input
                placeholder="Nome da turma"
                onChangeText={setGroup}
                />
                <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}