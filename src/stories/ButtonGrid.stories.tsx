import type { Meta, StoryObj } from '@storybook/react'
import ButtonGrid from '../components/ButtonGrid'

const meta: Meta<typeof ButtonGrid> = {
    title: 'Calculator/ButtonGrid',
    component: ButtonGrid
}

export default meta
type Story = StoryObj<typeof ButtonGrid>

export const Default: Story = {
    args: {
        onNumber: () => { },
        onOperation: () => { },
        onEquals: () => { },
        onClear: () => { },
        onToggleSign: () => { },
        onDecimal: () => { }
    }
}