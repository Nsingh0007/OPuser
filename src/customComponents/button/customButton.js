import { ThemeColors } from '../../theme/theme';
import { Button } from '../customTextInput/indexCss';
export default function CustomButton(props) {
  const { title, type, width = '100%', background = ThemeColors.primary, func, icon, style } = props;
  return (
    <Button type={type} style={{ width: width, background: background, ...style }} onClick={func} >{icon}{title}</Button>
  )
}




