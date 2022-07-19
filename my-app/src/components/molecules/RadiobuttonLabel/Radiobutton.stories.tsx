import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import RadiobuttonLabel  from './Radiobutton';

export default {
  title: 'Molecules/Radiobutton',
  component: RadiobuttonLabel,
};

const Template = () => ({});

// export const Primary = Template.bind({});
// Primary.args = {
//   primary:true,
// };

export const Primary = {
  args: {
    primary:true,
  },
};

// storiesOf('Molecules/Radiobutton', module)
//   .add('Primary', ()=>(
//     <RadiobuttonLabel primary={true} >RadiobuttonLabel</RadiobuttonLabel>))
//   .add('Secondary',()=>(
//     <RadiobuttonLabel primary={false}>RadiobuttonLabel</RadiobuttonLabel>))
  


