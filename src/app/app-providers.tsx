import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './app-routes';
import { store } from './core/redux/store';

const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'sans-serif';     
}
`;

export function AppProviders() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  );
}
