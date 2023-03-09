import React from 'react'
import { ThemeColors } from '../../theme/theme';
export default function CardHeading(props) {

    const { text, margin=0 } = props

    const headStyle={
        // fontFamily:ThemeColors?.font?.cardheading.fontFamily,
        fontWeight: ThemeColors?.font?.cardheading.fontWeight,
        fontSize: ThemeColors?.font?.cardheading.fontSize,
        lineHeight:ThemeColors?.font?.cardheading.lineHeight,
        margin:margin
    }
        return (
            <p style={headStyle}>{text}</p>
        )
}  