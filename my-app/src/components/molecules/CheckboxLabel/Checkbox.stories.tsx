import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import CheckboxLabel  from './CheckboxLabel';

export default {
  title: 'Molecules/Checkbox',
  component: CheckboxLabel,
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

// storiesOf('Molecules/Checkbox', module)
//   .add('Primary', ()=>(
//     <CheckboxLabel primary={true} >CheckboxLabel</CheckboxLabel>))
//   .add('Secondary',()=>(
//     <CheckboxLabel primary={false}>CheckboxLabel</CheckboxLabel>))
  


