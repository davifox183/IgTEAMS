import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";


export function NewGroup(){
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [group, setGroup] = useState('');

    function handleNew(){
        navigation.navigate('players', {group});
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