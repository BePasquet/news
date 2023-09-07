import { PropsWithChildren, ReactNode } from 'react';
import { BaseState } from 'src/app/core/interfaces/base-state.interface';
import { CenterLoader } from '../center-loader';
import { WarningMessage } from '../warning-message';

export interface ResultsProps<T = unknown> extends Omit<BaseState, 'loaded'> {
  data?: T;
  loaderComponent?: ReactNode;
}

/**
 * Utility to show results based on state (loading, error and data)
 * @param params -
 * - data used by children
 * - loading flag that signifies loading state
 * - error message to display
 * @example
 * export function App() {
 *   const [loading, setLoading] = useState(false);
 *   const [error, setError] = useState('false');
 *   const [data, setData] = useState([]);
 *
 *   const fetchData = async () => {
 *     try {
 *       setLoading(true);
 *       const response = await fetch('/example.com');
 *       const result = await response.json();
 *       setData(result);
 *     } catch (e) {
 *       setError(e as string);
 *     } finally {
 *       setLoading(false);
 *     }
 *   };
 *
 *   useEffect(() => {
 *     fetchData();
 *   }, []);
 *
 *   return (
 *     <Results loading={loading} error={error} data={data}>
 *       {data && JSON.stringify(data)}
 *     </Results>
 *   );
 * }
 */
export function Results({
  loading,
  error,
  data,
  children,
  loaderComponent = <CenterLoader />,
}: PropsWithChildren<ResultsProps>) {
  if (error) {
    return <WarningMessage message={error} />;
  }

  if (loading) {
    return loaderComponent;
  }

  return !!data && children;
}
