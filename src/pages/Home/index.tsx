import { useState } from 'react';
import { useQRCode } from 'next-qrcode';
import validator from 'validator';

import { Main, Form, Input, Div, H1, Btn, P } from './styled';

function Home() {
  const { Canvas } = useQRCode();
  const [url, setUrl] = useState('');

  return (
    <Main>
      <H1>GERADOR DE QRCODE</H1>
      <Form>
        <Input
          type="url"
          id="url"
          value={ url }
          placeholder="insira sua url"
          onChange={ ({ target }) => setUrl(target.value) }
        />
        <Div>
          { validator.isURL(url) ? (
            <Canvas
              text={ url }
              options={ {
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                  dark: '#fff',
                  light: '#3685fe',
                },
              } }
            />
          ) : (
            <P>Digite uma URL válida para gerar o seu QRCode</P>
          )}
        </Div>
      </Form>
      <Btn>Salvar QR</Btn>
    </Main>
  );
}

export default Home;
