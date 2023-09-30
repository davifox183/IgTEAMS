import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup(){
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlight
                    title="Nova Turma"
                    subtitle="Crie a turma para adicionar pessoas"
                />
                <Input />
                <Button 
                title="Criar"
                style={{marginTop: 20}}
                />
            </Content>
        </Container>
    )
}