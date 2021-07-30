import React from 'react';
import { MemoryRouter,useHistory } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Verify all routes', () => {

  it('Redirects to /', () => {
    const RouteFound = () => {
      const history = useHistory();
      return (
        <div>
          <button onClick={() => history.push('/')} />
        </div>
      );
    };
    const { getByRole } = render(
      <MemoryRouter>
        <RouteFound />
      </MemoryRouter>,
    );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });


  it('Redirects to /menu', () => {
    const RouteFound = () => {
      const history = useHistory();
      return (
        <div>
          <button onClick={() => history.push('/menu')} />
        </div>
      );
    };
    const { getByRole } = render(
      <MemoryRouter>
        <RouteFound />
      </MemoryRouter>,
    );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/menu');
  })

    it('Redirects to /edit', () => {
      const RouteFound = () => {
        const history = useHistory();
        return (
          <div>
            <button onClick={() => history.push('/edit')} />
          </div>
        );
      };
      const { getByRole } = render(
        <MemoryRouter>
          <RouteFound />
        </MemoryRouter>,
      );
  
      fireEvent.click(getByRole('button'));
      expect(mockHistoryPush).toHaveBeenCalledWith('/edit');
  });

  it('Redirects to /text', () => {
    const RouteFound = () => {
      const history = useHistory();
      return (
        <div>
          <button onClick={() => history.push('/text')} />
        </div>
      );
    };
    const { getByRole } = render(
      <MemoryRouter>
        <RouteFound />
      </MemoryRouter>,
    );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/text');
});

it('Redirects to /select', () => {
  const RouteFound = () => {
    const history = useHistory();
    return (
      <div>
        <button onClick={() => history.push('/select')} />
      </div>
    );
  };
  const { getByRole } = render(
    <MemoryRouter>
      <RouteFound />
    </MemoryRouter>,
  );

  fireEvent.click(getByRole('button'));
  expect(mockHistoryPush).toHaveBeenCalledWith('/select');
});

it('Redirects to /selectMultiple', () => {
  const RouteFound = () => {
    const history = useHistory();
    return (
      <div>
        <button onClick={() => history.push('/selectMultiple')} />
      </div>
    );
  };
  const { getByRole } = render(
    <MemoryRouter>
      <RouteFound />
    </MemoryRouter>,
  );

  fireEvent.click(getByRole('button'));
  expect(mockHistoryPush).toHaveBeenCalledWith('/selectMultiple');
});
})