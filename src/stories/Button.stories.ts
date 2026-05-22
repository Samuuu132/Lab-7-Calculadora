import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Calculator/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Number: Story = {
  args: { label: '5', onClick: () => { } }
}

export const Action: Story = {
  args: { label: 'AC', onClick: () => { }, variant: 'action' }
}

export const Operation: Story = {
  args: { label: '+', onClick: () => { }, variant: 'operation' }
}

export const Equals: Story = {
  args: { label: '=', onClick: () => { }, variant: 'equals' }
}

export const Wide: Story = {
  args: { label: '0', onClick: () => { }, variant: 'wide' }
}
