import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import {Title,TitleSecondary,Text}  from './TextElement';
import {DateText} from './Date'

// const date=new Date();

storiesOf('Atoms/Title', module)
  .add('Title light', ()=>(
    <Title light>Title Light</Title>))
  // .add('TitleSecondary dark', ()=>(
  //   <TitleSecondary light={false}>TitleSecondary</TitleSecondary>))
  // .add('Text light' , ()=>(
  //   <Text light>Text</Text>))
  // .add('Date light', ()=>(
  //   <DateText light>date</DateText>))
  
  
