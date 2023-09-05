import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './app-routes';

const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0    
}
`;

export function AppProviders() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}
