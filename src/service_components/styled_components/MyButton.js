import React from 'react';
import styled, {css} from "styled-components";

export const MyButton =  styled.button`
  cursor: pointer;
  ${props => props.primary && css`
    background: white;
    color: green;
  `}
  ${props => props.likeLink && css`
    color: green;
  `}
  background: ${props => (props.btnBackground)};
  color: ${props => (props.btnColor)};
  margin: ${props => (props.btnMtop)}rem ${props => (props.btnMright)}rem ${props => (props.btnMbottom)}rem ${props => (props.btnMleft)}rem;
  padding: ${props => (props.btnPtop)}rem ${props => (props.btnPright)}rem ${props => (props.btnPbottom)}rem ${props => (props.btnPleft)}rem;
  height: ${props => (props.bthHeight * 0.2)+ 0.8}rem;
  width: ${props => (props.btnWidth * 0.2)+ 3}rem;
  border: ${props => (props.btnBorderSize)}px solid ${props => (props.bthBorderColor)};
  border-radius: ${props => (props.btnBorderRadiusSize)}px;
`
