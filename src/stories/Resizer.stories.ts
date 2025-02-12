import type { Meta } from '@storybook/react';
import { Resizer } from '../components/Resizer/Resizer';

const meta: Meta<typeof Resizer> = {
  title: 'Components/Resizer',
  component: Resizer,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    className: 'margin-bottom-32',
    initialWidth: 600,
    initialHeight: 100,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi eligendi dolorum voluptatibus soluta pariatur quam fugiat ab quaerat rem provident quas at possimus officia repellat, consequuntur culpa ipsum iure autem, voluptatem perferendis aliquam delectus repellendus perspiciatis. Nam sint at sunt provident, amet odio vitae libero illo, dolore consequatur deserunt praesentium sit dicta quod neque quis dolorem iste alias, autem maiores atque doloribus! Ea ipsum iusto possimus maiores quae tenetur ratione sed, est, veritatis labore cum, tempora nemo consequuntur inventore.',
  },
};
