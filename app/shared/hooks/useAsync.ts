import { useState, useCallback, useEffect } from "react";

type UseAsyncReturnType<T> = {
  isLoading: boolean;
  data: T | null;
  error: Error | null;
};
//This is almost the same as useQuery, but without rerenders.

function useAsync<T>(asyncCallback: () => Promise<T>): UseAsyncReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const execute = useCallback(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    asyncCallback()
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [asyncCallback]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { isLoading, data, error };
}

export default useAsync;
