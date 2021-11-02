import { render } from '@testing-library/react';

import EnolaUi from './enola-ui';

describe('EnolaUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnolaUi />);
    expect(baseElement).toBeTruthy();
  });
});
