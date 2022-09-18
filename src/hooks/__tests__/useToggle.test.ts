import { act, renderHook } from '@testing-library/react';
import { useToggle } from '../useToggle';

describe('useToggle hook', () => {
	it('should return an array with \'false\' in its first position if it doesn\'t receive a parameter and a function in its second position', () => {
		const { result } = renderHook(() => useToggle());

		expect(result.current[0]).toBe(false);
		expect(result.current[1]).toBeInstanceOf(Function);
	});

	it('should return \'true\' if the function is executed (with no parameter passed)', () => {
		const { result } = renderHook(() => useToggle());

		act(() => {
			result.current[1]();
		});

		expect(result.current[0]).toBe(true);
	});

	it('should return \'true\' if it receives \'true\' as parameter', () => {
		const { result } = renderHook(() => useToggle(true));

		expect(result.current[0]).toBe(true);
	});

	it('should return the opposite boolean if it receives a boolean as parameter and if the function returned by the hook is executed', () => {
		const { result, unmount } = renderHook(() => useToggle(true));

		act(() => {
			result.current[1]();
		});

		expect(result.current[0]).toBe(false);

		unmount();

		const { result: resultAfterUnmounted } = renderHook(() =>
			useToggle(false)
		);

		act(() => {
			resultAfterUnmounted.current[1]();
		});

		expect(resultAfterUnmounted.current[0]).toBe(true);
	});
});
