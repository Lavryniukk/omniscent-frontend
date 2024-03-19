import { AxiosError } from "axios";
import { useState, useCallback, useEffect } from "react";

export type UseAsyncReturnType<T> = {
  isLoading: boolean;
  data: T | null;
  error: Error | null;
  refetch: () => void;
};

//This is almost the same as useQuery, but without rerenders.

function useAsync<T>(asyncCallback: () => Promise<T>): UseAsyncReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const execute = useCallback(async () => {
    setIsLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await asyncCallback();
      setData(response);
      setError(null);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }, [asyncCallback]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { isLoading, data, error, refetch: execute };
}

export default useAsync;
