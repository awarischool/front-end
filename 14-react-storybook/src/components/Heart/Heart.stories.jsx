import Heart from './Heart';

export default {
    title: 'Components/Heart',
    component: Heart,
    argTypes: {
        onClick: {
            action: 'onClick'
        },
        selected: {
            control: 'boolean',
            defaultValue: false
        },
        testId: {
            control: 'text',
            defaultValue: 'heart-1'
        }
    }
}

const Template = (args) => (
  <div className='heart-storybook-wrapper'>
    <Heart {...args} />
  </div>
);

export const Default = Template.bind({});