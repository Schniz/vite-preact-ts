import {IconBrandFirefox} from '@tabler/icons'
import { h, Fragment } from 'preact'

export function App() {
  return (
    <>
      <IconBrandFirefox style={{ width: '1em', height: '1em', fontSize: '3em' }} />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
