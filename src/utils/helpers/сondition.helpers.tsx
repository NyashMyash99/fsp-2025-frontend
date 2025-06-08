import { type ReactNode } from 'react';

export function orUndefined<T>(condition: boolean, value: T): T | undefined {
  return condition ? value : undefined;
}

export function orEmpty(condition: boolean, value: ReactNode): ReactNode {
  return condition ? value : <></>;
}
