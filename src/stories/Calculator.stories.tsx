import type { Meta, StoryObj } from '@storybook/react'
import Calculator from '../components/Calculator'

const meta: Meta<typeof Calculator> = {
  title: 'Calculator/Calculator',
  component: Calculator
}

export default meta
type Story = StoryObj<typeof Calculator>

export const Default: Story = {}
