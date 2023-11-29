import { useState } from 'react';
import QRCode from 'qrcode.react';
import validator from 'validator';

import { Toast } from '../../utils/swal';
import { Btn, H1, Main } from '../../GlobalStyled';
import { Div, Form, Input, P } from './styled';

function Home() {
  const [link, setLink] = useState('');

  const onSave = () => {
    const qrList: string[] = JSON.parse(localStorage.getItem('qrList') || '[]');
    if (qrList.includes(link)) {
      Toast.fire({
        icon: 'error',
        title: 'Esse QrCode já foi salvo',
      });
      return;
    }
    qrList.push(link);
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
          value={ link }
          onChange={ (param) => setLink(param.target.value) }
        />
      </Form>
      <Div>
        {
          validator.isURL(link) ? (
            <QRCode
              value={ link }
              renderAs="svg"
              level="M"
              size={ 200 }
              bgColor="var(--light-blue)"
              fgColor="var(--white)"
            />
          ) : (
            <P>Digite uma URL válida para gerar o seu QRCode</P>
          )
        }
      </Div>
      <Btn
        disabled={ !validator.isURL(link) }
        type="button"
        onClick={ onSave }
      >
        Salvar Link
      </Btn>
    </Main>
  );
}

export default Home;
