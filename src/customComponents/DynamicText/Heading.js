import React from 'react'
import styled from 'styled-components'
import { ThemeColors } from '../../theme/theme';
import "../../App.css"
import WindowSize from '../../utils/hooks/windowSize'

export function SmallHeading(props) {
    const { text, color } = props
    const StyledText = styled.p`
margin:0;
font-size:${ThemeColors.font.SmallHeading.fontSize};
font-weight:${ThemeColors.font.SmallHeading.fontWeight};
font-family:${ThemeColors.font.SmallHeading.fontFamily};
color:${color || ThemeColors.black};
`;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function NormalHeading(props) {
    const { text, color } = props
    const StyledText = styled.p`
margin:0;
font-size:${ThemeColors.font.NormalHeading.fontSize};
font-weight:${ThemeColors.font.NormalHeading.fontWeight};
font-family:${ThemeColors.font.NormalHeading.fontFamily};
color:${color || ThemeColors.black};
`;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function Heading(props) {
    const { text } = props
    // position: absolute;
    const StyledText = styled.p`
margin:0;
font-size:${ThemeColors.font.Heading.fontSize};
font-weight:${ThemeColors.font.Heading.fontWeight};
color:${ThemeColors.black};
`;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function SubHeading(props) {
    const { width } = WindowSize();
    const { text } = props
    const StyledText = styled.p`
    margin:0;
    font-size:${({ width1 }) => width1 <= 800 ? "16px" : ThemeColors.font.subHeading.fontSize};
    font-weight:${ThemeColors.font.subHeading.fontWeight};
    font-family: "Medium";
    color:${ThemeColors.black};
    `;
    return (
        <StyledText width1={width} >{text}</StyledText>
    )
}

export function BoldHeading(props) {
    const { text } = props
    const StyledText = styled.p`
    margin:0px 0px 0px 0px;
    font-size:${ThemeColors.font.boldHeading.fontSize};
    font-weight:${ThemeColors.font.boldHeading.fontWeight};
    color:${ThemeColors.font.boldHeading.color};
    font-family:${ThemeColors.font.boldHeading.fontFamily};
    `;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function TitleHeading(props) {
    const { text } = props
    const StyledText = styled.p`
    margin:0px 0px 0px 0px;
    font-size:calc(5px + 1.8vmin);
    font-weight:${ThemeColors.font.TitleHeading.fontWeight};
    color:${ThemeColors.font.TitleHeading.color};
    font-family:${ThemeColors.font.TitleHeading.fontFamily};
    `;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function TileHeading(props) {
    const { text } = props
    const StyledText = styled.p`
    margin:7px 0 0 0;
    text-transform: uppercase;
    font-size:${ThemeColors.font.tileHeading.fontSize};
    font-weight:${ThemeColors.font.tileHeading.fontWeight};
    color:${ThemeColors.font.tileHeading.color};
    
    `;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function NormalTileHeading(props) {
    const { text } = props
    const StyledText = styled.p`
    margin:0;
    font-size:calc(7px + 1.9vmin);
    font-weight:${ThemeColors.font.NormalTitleHeading.fontWeight};
    font-style:${ThemeColors.font.NormalTitleHeading.fontStyle};
    // line-height:${ThemeColors.font.NormalTitleHeading.lineHeight};    
    `;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function CardSubHeading(props) {
    const { text } = props
    const StyledText = styled.p`
    margin:0;
    font-size:${ThemeColors.font.cardSubHeading.fontSize};
    font-weight:${ThemeColors.font.cardSubHeading.fontWeight};
    color:${ThemeColors.black};    
    `;
    return (
        <StyledText>{text}</StyledText>
    )
}

export function LargHeading(props) {
    const { text } = props
    const StyledText = styled.p`
    margin:0;
    font-size:calc(10px + 3vmin);
    font-weight:${ThemeColors.font.largHeading.fontWeight};
    font-family: ${ThemeColors.font.largHeading.fontFamily}
    font-style: ${ThemeColors.font.largHeading.fontStyle}
    `;
    return (
        <StyledText>{text}</StyledText>
    )
}
export function XLargHeading(props) {
    const { width } = WindowSize();
    const { text } = props
    const StyledText = styled.p`
    margin:0;
    font-size:calc(12px + 3vmin);
    font-weight:${ThemeColors.font.xLargHeading.fontWeight};
    font-family: ${ThemeColors.font.xLargHeading.fontFamily}
    `;
    // ${({ width1 }) => width1 <= 800 ? "28px" : ThemeColors.font.xLargHeading.fontSize}
    return (
        <StyledText width1={width}>{text}</StyledText>
    )
}