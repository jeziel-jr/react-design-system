import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { TextInput } from './components/TextInput'
import { Envelope } from 'phosphor-react'
import './styles/global.css'

export function App() {
  return (
    <div className="bg-gray-900 w-screen h-screen">
      <Button>Create account</Button>
      <Heading size="lg">teste</Heading>
      <TextInput.Root>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail address" />
      </TextInput.Root>
    </div>
  )
}
