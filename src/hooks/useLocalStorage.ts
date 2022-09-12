export function useLocalStorage<T>(): {
	getItem: (key: string) => T | null;
	storeItem: (key: string, value: T) => void;
} {
	const getItem = (key: string): T | null => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		} catch (error) {
			console.error(error);
			return null;
		}
	};

	const storeItem = (key: string, value: T) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	return { getItem, storeItem };
}
