import { createRoot } from 'react-dom/client';
import { Spenpo } from './Spenpo';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

const container = document.getElementById('root');

createRoot(container!).render(
  <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Spenpo />
      </ChakraProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
