import { useState } from 'react';
import {Message} from './Components/Message';



function App() {
  return (
    <>
     <p>1. Создала новый проект с использованием create-react-app с названием lesson1.<br/>
        2. Создала компонент Message, отображающий переданный ему пропсом текст.<br/>
        3. Изменила компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст
        (константу), а именно "Message Component".<br/>
        4. Стилизовала компонент через css (с использованием module.css).<br/>
        5. Установила расширение React Devtools
    </p>
      <Message title="Message Component"/>
    </>
  );
}

export default App;
