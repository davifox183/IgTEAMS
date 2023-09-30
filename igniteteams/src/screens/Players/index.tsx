import { Container } from "./style";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

export function Players(){
    return(
        <Container>
            <Header showBackButton />
            
            <Highlight
                title="Nome da Turma"
                subtitle="Adicione a galera e separe os times"
            />

            <ButtonIcon/>
        </Container>
    );
}