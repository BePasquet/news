import { PropsWithChildren } from 'react';
import { BaseState } from 'src/app/core/interfaces/base-state.interface';
import { CenterLoader } from './center-loader';
import { WarningMessage } from './warning-message';

export interface ResultsProps<T = unknown> extends Omit<BaseState, 'loaded'> {
  data?: T;
}

export function Results({
  loading,
  error,
  data,
  children,
}: PropsWithChildren<ResultsProps>) {
  if (error) {
    return <WarningMessage message={error} />;
  }

  if (loading) {
    return <CenterLoader />;
  }

  return !!data && children;
}
