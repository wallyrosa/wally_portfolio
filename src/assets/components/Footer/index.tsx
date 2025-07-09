import { Box } from '@mui/material';
import { LineStyle } from '../../common/lines/LineStyle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export function Footer() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleCopy = async (event: React.MouseEvent | React.TouchEvent) => {
    // Garante que o evento seja disparado por uma interação real do usuário
    event.preventDefault();
    event.stopPropagation();

    try {
      await copyToClipboard('wallysson.rosa12@gmail.com');
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  return (
    <footer className="footer">
      <Box
        sx={{
          width: '90%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <Box className="textFooter">
          VAMOS
          <p className="strongTextFooter">
            TRABALHAR JUNTOS<strong>?</strong>
          </p>
        </Box>
        <LineStyle grid={[3, 6, 3]}>
          <Box className="textEmailFooter">
            <a href="mailto:wallysson.rosa12@gmmail.com">Me mande um email</a>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '9px',
              }}
            >
              <Box className="strongTextFooter">Ou copie e cole :D</Box>
              <ContentCopyIcon
                onClick={handleCopy}
                onTouchEnd={handleCopy}
                className="copyIcon"
                sx={{
                  cursor: 'pointer',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  WebkitTouchCallout: 'none',
                }}
              />
              {isCopied && <Box className="helperCopy">Copiado!</Box>}
            </Box>
          </Box>
        </LineStyle>
        <Box className="smallTextFooterContent">
          <Box className="smallTextFooter">
            Este portfolio
            <p className="strongTextFooter">não foi</p> feito em cima de um{' '}
            <p className="strongTextFooter">template.</p>
          </Box>{' '}
          <Box className="smallTextFooter">
            Criado por
            <p className="strongTextFooter">
              Wallysson da Silva Rosa<strong>.</strong>
            </p>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
