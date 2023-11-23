import { useEffect, useState } from 'react';
import { useQRCode } from 'next-qrcode';
import { MdDelete } from 'react-icons/md';

import { Btn, H1, Main } from '../../globalStyled';
import { Container, Delete, Div, Li, P, ContainerBtns, Ul } from './styled';

export default function LinksList() {
  const { Canvas } = useQRCode();
  const [links, setLinks] = useState<string[]>([]);
  const [viewQr, setViewQr] = useState(false);

  useEffect(() => {
    const qrList = JSON.parse(localStorage.getItem('qrList') || '[]');
    setLinks(qrList);
  }, []);

  const deleteQr = (link: string) => {
    const qrList = JSON.parse(localStorage.getItem('qrList') || '[]');
    const newQrList = qrList.filter((qr: string) => qr !== link);
    localStorage.setItem('qrList', JSON.stringify(newQrList));
    setLinks(newQrList);
  };

  if (!links.length) return (<h1>Salve seu primeiro QR!</h1>);
  return (
    <Main>
      <H1>Lista de QrCodes</H1>
      <Ul>
        { links.map((link) => {
          return (
            <>
              <Li key={ link }>
                <P>
                  { link }
                </P>
                <ContainerBtns>
                  <Btn onClick={ () => setViewQr(!viewQr) }>
                    Ver QR
                  </Btn>
                  <Delete onClick={ () => deleteQr(link) }>
                    <MdDelete />
                  </Delete>
                </ContainerBtns>
              </Li>
              { viewQr && (
                <Container>
                  <Div>
                    <Canvas
                      text={ link }
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
                  </Div>
                  <Btn onClick={ () => setViewQr(!viewQr) }>
                    Fechar
                  </Btn>
                </Container>
              )}
            </>
          );
        })}
      </Ul>
    </Main>
  );
}
