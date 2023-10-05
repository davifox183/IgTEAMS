import { TouchableOpacityProps } from "react-native";
import { MaterialIcons} from '@expo/vector-icons';
import { Icon, Container, ButtonIconTypeStyleProps } from "./style";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;

}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest } : Props) {
    return (
        <Container>
          <Icon 
          name={icon}
          type= {type}
          />
        </Container>

    );
}