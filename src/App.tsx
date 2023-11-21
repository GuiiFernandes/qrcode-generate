import { useQRCode } from 'next-qrcode';
import { useState } from 'react';

import { Main, Form, Input } from './styled';

function App() {
  const { Canvas } = useQRCode();
  const [url, setUrl] = useState('');

  return (
    <Main>
      <h1>GERADOR DE QRCODE</h1>
      <Form>
        <Input
          type="url"
          id="url"
          value={ url }
          placeholder="insira sua url"
          onChange={ ({ target }) => setUrl(target.value) }
        />
        { url && (
          <Canvas
            text={ url }
            options={ {
              errorCorrectionLevel: 'M',
              margin: 3,
              scale: 4,
              width: 200,
              color: {
                dark: '#000',
                light: '#fff',
              },
            } }
          />
        ) }
      </Form>
    </Main>
  );
}

export default App;
