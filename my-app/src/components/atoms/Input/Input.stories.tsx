import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import Input  from './Input';

storiesOf('Atoms/Input', module)
  .add('Primary', ()=>(
    <Input primary />))
  .add('Secondary',()=>(
    <Input primary={false} />))
  


