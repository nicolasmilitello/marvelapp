import { useEffect, useRef, useState } from 'react';

type ErrorType = {
	status: number;
	message: string;
};

type State<T> = {
	data?: T;
	error?: ErrorType;
	loading?: boolean;
};

function useFetch<T>(url?: string): State<T> {
	const cancelRequest = useRef<boolean>(false);

	const [dataFetched, setDataFetched] = useState<T | undefined>(undefined);

	const [errorFetch, setErrorFetch] = useState<ErrorType | undefined>(
		undefined
	);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (!url) return;

		cancelRequest.current = false;

		const fetchData = async () => {
			setLoading(true);

			try {
				const response = await fetch(url);

				if (!response.ok) {
					setErrorFetch({
						status: response.status,
						message: response.statusText,
					});
					return;
				}

				const data = (await response.json()) as T;

				if (cancelRequest.current) return;

				setDataFetched(data);
			} catch (error) {
				if (cancelRequest.current) return;

				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			cancelRequest.current = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return { data: dataFetched, error: errorFetch, loading };
}

export default useFetch;
