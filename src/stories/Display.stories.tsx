import type { Meta, StoryObj } from '@storybook/react'
import Display from '../components/Display'

const meta: Meta<typeof Display> = {
    title: 'Calculator/Display',
    component: Display
}

export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = {
    args: { value: '0' }
}

export const WithNumber: Story = {
    args: { value: '123' }
}

export const WithLargeNumber: Story = {
    args: { value: '999999999' }
}

export const WithError: Story = {
    args: { value: 'ERROR' }
}

export const WithDecimal: Story = {
    args: { value: '3.14' }
}