import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form } from "./style";

export function Players(){
    return(
        <Container>
            <Header showBackButton />
            
            <Highlight
                title="Nome da Turma"
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
        </Container>
    );
}