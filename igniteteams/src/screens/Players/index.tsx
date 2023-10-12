import { useState } from 'react';
import { FlatList } from "react-native";
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

type RouteParams= {
    group: string;
}

export function Players(){
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);
    const route = useRoute();
    const { group } = route.params as RouteParams;

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
                    autoCorrect={false}
                />
                <ButtonIcon 
                    icon="add"
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
                keyExtractor={item => item}
                renderItem={({ item })=> (
                    <PlayerCard
                        name = {item}
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