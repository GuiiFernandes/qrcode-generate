import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';

import { Btn, H1, Main } from '../../GlobalStyled';
import { Container, ContainerBtns, Delete, Div, Li, P, Ul } from './styled';

function List() {
  const [qrList, setQrList] = useState<string[]>([]);
  const [showLink, setShowLink] = useState('');

  useEffect(() => {
    const qrListStorage: string[] = JSON.parse(localStorage.getItem('qrList') || '[]');
    setQrList(qrListStorage);
  }, []);

  const onDelete = (link: string) => {
    const newQrList = [...qrList];
    newQrList.splice(qrList.indexOf(link), 1);
    localStorage.setItem('qrList', JSON.stringify(newQrList));
    setQrList(newQrList);
  };

  return (
    <Main>
      <H1>LISTA DE QRCODES</H1>
      <Ul>
        { qrList.map((link) => (
          <Li key={ link }>
            <P>{ link }</P>
            <ContainerBtns>
              <Btn
                onClick={ () => setShowLink(link) }
                type="button"
              >
                Exibir QR
              </Btn>
              <Delete
                type="button"
                onClick={ () => onDelete(link) }
              >
                <MdDelete />
              </Delete>
            </ContainerBtns>
          </Li>
        ))}
      </Ul>
      { showLink && (
        <Container>
          <Div>
            <QRCode
              value={ showLink }
              renderAs="svg"
              level="M"
              size={ 200 }
              bgColor="var(--light-blue)"
              fgColor="var(--white)"
            />
            <Btn
              type="button"
              onClick={ () => setShowLink('') }
            >
              Fechar
            </Btn>
          </Div>
        </Container>
      )}
    </Main>
  );
}

export default List;
