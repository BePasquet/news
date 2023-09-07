import { AxiosError } from 'axios';

export const DEFAULT_ERROR_MESSAGE =
  'Sorry there was an error please try again later';

export function parseAxiosError(error: unknown): string {
  return (
    (error as AxiosError<{ message: string }>).response?.data.message ??
    DEFAULT_ERROR_MESSAGE
  );
}
