import { ThemeColors } from '../../theme/theme';
import { Button } from '../customTextInput/indexCss';
export default function CustomButton(props) {
  const { title, type, width = '100%', height = "52px", background = ThemeColors.primary, func, icon, style, iconStyle, titleStyle } = props;
  return (
    <Button type={type} style={{ width: width, height: height, background: background, ...style }} onClick={func} >{icon && <div style={{ ...iconStyle }}>{icon}</div>}{title && <div style={{ ...titleStyle }}>{title}</div>}</Button>
  )
}




