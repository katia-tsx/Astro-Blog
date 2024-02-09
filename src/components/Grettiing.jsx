import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button class="border rounded-lg mb-3 h-9 w-28 bg-foreground" onClick={() => setGreeting(randomMessage())}>
        Nuevo saludo
      </button>
    </div>
  );
}