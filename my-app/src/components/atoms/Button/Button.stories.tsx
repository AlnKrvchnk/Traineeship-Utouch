import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import Button  from './Button';

    export default {
      title: 'Atoms/Button',
      component: Button,
    };
    
    const Template = () => ({});
    
    export const Primary = {
      args: {
        disable:true,
        small:true,
      },
    };


