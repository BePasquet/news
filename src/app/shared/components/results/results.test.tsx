import { render, screen } from '@testing-library/react';
import { DEFAULT_ERROR_MESSAGE } from 'src/app/core/parsers/parse-axios-error';
import { Results } from './results';

describe('Results Component', () => {
  it('Should display loader when loading is true', () => {
    render(
      <Results loading={true} error="">
        <p>Dummy text</p>
      </Results>
    );
    const component = screen.getByRole('progressbar');
    expect(component).toBeDefined();
  });

  it('Should display error message when loading is false and error is populated', () => {
    render(
      <Results loading={false} error={DEFAULT_ERROR_MESSAGE}>
        <p>Dummy text</p>
      </Results>
    );

    const component = screen.getByText(DEFAULT_ERROR_MESSAGE);
    expect(component).toBeDefined();
  });

  it('Should display children when loading is false, error is empty and data is populated', () => {
    const TEXT = 'Dummy text';

    render(
      <Results loading={false} error="" data={[]}>
        <p>{TEXT}</p>
      </Results>
    );

    const component = screen.getByText(TEXT);
    expect(component).toBeDefined();
  });
});
