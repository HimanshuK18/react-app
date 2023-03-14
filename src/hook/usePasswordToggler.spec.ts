import { act, renderHook } from '@testing-library/react-hooks';
import { usePasswordToggler } from './usePasswordToggler';

describe('usePasswordToggler', () => {
  it('should toggle password visibility', () => {
    const { result } = renderHook(() => usePasswordToggler());

    expect(result.current.passwordVisibility).toBe(true);
    expect(result.current.type).toBe('password');

    act(() => {
      result.current.handlePasswordVisibility();
    });

    expect(result.current.passwordVisibility).toBe(false);
    expect(result.current.type).toBe('text');

    act(() => {
      result.current.handlePasswordVisibility();
    });

    expect(result.current.passwordVisibility).toBe(true);
    expect(result.current.type).toBe('password');
  });
});
