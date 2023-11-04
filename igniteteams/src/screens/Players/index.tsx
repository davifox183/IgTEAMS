import { useState, useEffect } from 'react';
import { FlatList, Alert } from "react-native";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from '@components/PlayerCard';
import { useRoute } from '@react-navigation/native';

import { Container, Form, HeaderList, NumberOfPlayers } from "./style";
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playerGetByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';

type RouteParams= {
    group: string;
}

export function Players(){
    const [newPlayerName, setNewPlayerName] =  useState('');
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute();
    const { group } = route.params as RouteParams;

    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Nova Pessoa','Informe o nome da pessoa para adicionar.');
        }
        
        const newPlayer = {
            name: newPlayerName,
            team,
        }   

        try {
            await playerAddByGroup(newPlayer, group);
            featchPlayerByTeam();

        }catch(error){
            if(error instanceof AppError){
                Alert.alert('Nova pessoa',error.message);
            }else{
                console.log(error);
                Alert.alert('Nova Pessoa', 'nao foi possivel adicionar');
            }
        }
    }

    async function featchPlayerByTeam(){
        try{
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        }catch(error){
            console.log(error);
            Alert.alert('Pessoas', 'Nao foi possivel carregar as pessoas do time selecionado');
        }
    }

   useEffect(() => {
        featchPlayerByTeam();
    },[team]);

    return(
        <Container>
            <Header showBackButton />
            
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            
            <Form>
                <Input
                    placeholder="Nome da Pessoa"
                    onChangeText={setNewPlayerName}
                    autoCorrect={false}
                />
                <Button
                    title='Add' 
                    //icon="add"
                    onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>
                <FlatList 
                    data= {['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({item })=>(
                        <Filter
                        title={item}
                        isActive={item === team}
                        onPress={() => setTeam(item)}
                        />)}
                    horizontal
                />
                <NumberOfPlayers>
                        {players.length}
                </NumberOfPlayers>
            </HeaderList>
            <FlatList
                data = {players}
                keyExtractor={item => item.name}
                renderItem={({ item })=> (
                    <PlayerCard
                        name = {item.name}
                        onRemove={() => {}}
                        />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message="N'ao ha pessoas nesse time" />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && { flex: 1 },
                ]}
            />
            <Button
                title='Remover Turma'
                type = "SECONDARY"
            />
        </Container>
    );
}
