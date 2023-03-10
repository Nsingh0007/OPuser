import { ThemeColors } from '../../theme/theme';
export default function CustomButton(props) {
  const { title, type, width = '100%', height = "52px", background = ThemeColors.primary, color = ThemeColors.white, func, icon, style, iconStyle, titleStyle, disable } = props;
  return (
    <button className='btn'  disabled={disable} type={type} style={{ width: width, height: height, background: background, color: color, ...style }} onClick={func} >{icon && <div style={{ ...iconStyle }}>{icon}</div>}{title && <div style={{ ...titleStyle }}>{title}</div>}</button>
  )
}




