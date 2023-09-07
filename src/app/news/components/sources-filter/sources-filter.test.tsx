import { ReactNode } from 'react';
import { store } from '../../../core/redux/store';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as reduxHooks from '../../../core/redux/redux-hooks';

import { sourcesMock } from 'src/app/core/mocks/mock';
import { DEFAULT_ERROR_MESSAGE } from 'src/app/core/parsers/parse-axios-error';
import * as sourcesState from '../../state/sources.state';
import { SourceFilter } from './sources-filter';

export function renderWithRedux(ui: ReactNode, providerStore = store) {
  return render(<Provider store={providerStore}>{ui}</Provider>);
}

describe('SourcesFilter Component', () => {
  it('Should dispatch getSourcesThunk on mount', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();
    const thunk = jest.fn();

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'getSourcesThunk').mockImplementation(() => thunk);

    renderWithRedux(
      <SourceFilter selectedSource={''} onSourceChange={handleChange} />
    );

    await act(jest.fn);

    expect(dispatch).toHaveBeenNthCalledWith(1, thunk);
  });

  it('Should display loader when sources state loading is true', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'selectSourcesLoading').mockReturnValue(true);

    renderWithRedux(
      <SourceFilter selectedSource={''} onSourceChange={handleChange} />
    );

    const loader = screen.getByTestId('source-loader');
    expect(loader).toBeDefined();
  });

  it('Should display loader when sources state loading is false and loaded is false', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'selectSourcesLoading').mockReturnValue(false);
    jest.spyOn(sourcesState, 'selectSourcesLoaded').mockReturnValue(false);

    renderWithRedux(
      <SourceFilter selectedSource={''} onSourceChange={handleChange} />
    );

    const loader = screen.getByTestId('source-loader');
    expect(loader).toBeDefined();
  });

  it('Should display results when sources state loading is false and loaded true and data is populated', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'selectSourcesLoading').mockReturnValue(false);
    jest.spyOn(sourcesState, 'selectSourcesLoaded').mockReturnValue(true);
    jest.spyOn(sourcesState, 'selectSources').mockReturnValue(sourcesMock);

    renderWithRedux(
      <SourceFilter selectedSource={''} onSourceChange={handleChange} />
    );

    const container = screen.getByTestId('sources-list');
    expect(container).toBeDefined();
  });

  it('Should display error message when sources state loading is false and loaded false and error is populated', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'selectSourcesLoading').mockReturnValue(false);
    jest.spyOn(sourcesState, 'selectSourcesLoaded').mockReturnValue(true);
    jest.spyOn(sourcesState, 'selectSources').mockReturnValue([]);
    jest
      .spyOn(sourcesState, 'selectSourcesError')
      .mockReturnValue(DEFAULT_ERROR_MESSAGE);

    renderWithRedux(
      <SourceFilter selectedSource={''} onSourceChange={handleChange} />
    );

    const container = screen.getByText(DEFAULT_ERROR_MESSAGE);
    expect(container).toBeDefined();
  });

  it('Should display all as selected source when empty string is passed as selectedSource by props', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'selectSourcesLoading').mockReturnValue(false);
    jest.spyOn(sourcesState, 'selectSourcesLoaded').mockReturnValue(true);
    jest.spyOn(sourcesState, 'selectSources').mockReturnValue(sourcesMock);
    jest.spyOn(sourcesState, 'selectSourcesError').mockReturnValue('');

    renderWithRedux(
      <SourceFilter selectedSource={''} onSourceChange={handleChange} />
    );

    const allChip = screen.getByText('All');
    expect(allChip.parentElement?.classList.contains('active')).toBeTruthy();
  });

  it('Should display the specified selectedSource as active when specified by props as selectedSource', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();
    const [source] = sourcesMock;

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'selectSourcesLoading').mockReturnValue(false);
    jest.spyOn(sourcesState, 'selectSourcesLoaded').mockReturnValue(true);
    jest.spyOn(sourcesState, 'selectSources').mockReturnValue(sourcesMock);
    jest.spyOn(sourcesState, 'selectSourcesError').mockReturnValue('');

    renderWithRedux(
      <SourceFilter selectedSource={source.id} onSourceChange={handleChange} />
    );

    const sourceChip = screen.getByText(source.name);
    expect(sourceChip.parentElement?.classList.contains('active')).toBeTruthy();
  });

  it('Should trigger onSourceChange when another source is selected', async () => {
    const handleChange = jest.fn();
    const dispatch = jest.fn();
    const [source, toSelectSource] = sourcesMock;

    jest.spyOn(reduxHooks, 'useDispatch').mockImplementation(() => dispatch);
    jest.spyOn(sourcesState, 'selectSourcesLoading').mockReturnValue(false);
    jest.spyOn(sourcesState, 'selectSourcesLoaded').mockReturnValue(true);
    jest.spyOn(sourcesState, 'selectSources').mockReturnValue(sourcesMock);
    jest.spyOn(sourcesState, 'selectSourcesError').mockReturnValue('');

    renderWithRedux(
      <SourceFilter selectedSource={source.id} onSourceChange={handleChange} />
    );

    const nextSelectedSource = screen.getByText(toSelectSource.name);
    fireEvent.click(nextSelectedSource);

    expect(handleChange).toHaveBeenCalledWith(toSelectSource.id);
  });
});
