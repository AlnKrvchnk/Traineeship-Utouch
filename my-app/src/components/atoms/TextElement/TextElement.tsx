// import { ButtonHTMLAttributes } from 'react';
import styled from "styled-components";
import { color } from "../../../styles/variables";

export interface Props  {
  light: boolean;
  center?: boolean;
}

const Title = styled.h1<Props>`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.16em;
  display: inline-block;

  ${(props) =>
    props.light &&
    `
        color:${color.background}
    `}
  ${(props) =>
    !props.light &&
    `
        color:${color.dark}
    `}
    ${(props) =>
    props.center &&
    `
        text-align: center;
    `}
`;

const TitleSecondary = styled.h2<Props>`
display: inline-block;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.16em;
  ${(props) =>
    props.light &&
    `
        color:${color.background}
    `}
  ${(props) =>
    !props.light &&
    `
        color:${color.dark}
    `}
    ${(props) =>
    props.center &&
    `
        text-align: center;
    `}
`;

const TitleThird = styled.h3<Props>`
display: inline-block;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.16em;
  ${(props) =>
    props.light &&
    `
        color:${color.background}
    `}
  ${(props) =>
    !props.light &&
    `
        color:${color.dark}
    `}
    ${(props) =>
    props.center &&
    `
        text-align: center;
    `}
`;

const Text = styled.p<Props>`
display: inline-block;
  font-weight: 400;
  font-size: 14px;
  ${(props) =>
    props.light &&
    `
        color:${color.background}
    `}
  ${(props) =>
    !props.light &&
    `
        color:${color.dark}
    `}
    ${(props) =>
    props.center &&
    `
        text-align: center;
    `}
`;
const Span = styled.span<Props>`
  font-weight: 200;
  font-size: 12px;
  ${(props) =>
    props.light &&
    `
        color:${color.background}
    `}
  ${(props) =>
    !props.light &&
    `
        color:${color.dark}
    `}
    ${(props) =>
    props.center &&
    `
        text-align: center;
    `}
`;

export { Title, TitleSecondary, TitleThird, Text, Span };
