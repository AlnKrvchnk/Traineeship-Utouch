import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import Radiobutton from './Radiobutton';

export default {
    title: 'Atoms/Radiobutton',
    component: Radiobutton,
};

const Template = () => ({});

export const Primary = {
    args: {
        primary: true,
        checked: true,
    },
};
export const Secondary = {
    args: {
        primary: false,
        checked: true,
    },
};
