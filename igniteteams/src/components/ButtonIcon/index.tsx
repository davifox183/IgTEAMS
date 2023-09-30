import { TouchableOpacityProps } from "react-native";

import { Icon, Container } from "./style";

type Props = TouchableOpacityProps & {

}

export function ButtonIcon({ } : Props) {
    return (
        <Container>
          <Icon name="home" type="PRIMARY"/>
        </Container>

    );
}