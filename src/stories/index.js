import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MyButton from './Button.vue';

storiesOf('Buttons', module)
  .add('size', () => ({
    components: { MyButton },
    template: '<my-button size="small">small</my-button>'
  }));
  