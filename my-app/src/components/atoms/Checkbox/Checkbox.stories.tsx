import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
};

const Template = () => ({});

export const Primary = {
    args: {
        primary:true,
        checked:true,
    },
};
export const Secondary = {
    args: {
        primary:false,
        checked:true,
    },
};

