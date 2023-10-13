import { useState } from "react";
import { Alert } from 'react-native';
import { Input } from "@components/Input";
import { AppError } from "@utils/AppError";
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
            if(group.trim().length === 0){
                return Alert.alert('Novo Grupo','Informe o nome da turma.');
             }
            await groupCreate(group);
            navigation.navigate('players', {group});

        }catch(error){
            if(error instanceof AppError){
                Alert.alert('Novo Grupo',error.message);
            }else{
                Alert.alert('Novo Grupo','Nao foi possivel criar um novo grupo.');
                console.log(error);

            }
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