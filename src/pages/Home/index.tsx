import { useState } from 'react';
import { useQRCode } from 'next-qrcode';
import validator from 'validator';

import { Main, Btn, H1 } from '../../globalStyled';
import { Form, Input, Div, P } from './styled';
import { Toast } from '../../utils/swal';

function Home() {
  const { Canvas } = useQRCode();
  const [url, setUrl] = useState('');

  const saveQr = () => {
    const qrList = JSON.parse(localStorage.getItem('qrList') || '[]');
    if (qrList.includes(url)) {
      Toast.fire({
        icon: 'warning',
        title: 'Esse QrCode já foi salvo',
      });
      return;
    }
    qrList.push(url);
    localStorage.setItem('qrList', JSON.stringify(qrList));
    Toast.fire({
      icon: 'success',
      title: 'QrCode salvo com sucesso',
    });
  };

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
      <Btn onClick={ saveQr }>Salvar QR</Btn>
    </Main>
  );
}

export default Home;
