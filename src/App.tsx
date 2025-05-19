import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';
export function App() {
  return (
    <>
      <Heading>
        hello 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae possimus
        dolorem, excepturi dignissimos quis porro deserunt architecto. Et,
        molestias iure. Vel, quaerat eligendi! Vel eum ut soluta tempora
        incidunt laborum.
      </p>
    </>
  );
}
