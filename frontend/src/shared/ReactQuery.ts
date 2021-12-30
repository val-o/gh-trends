import { UseQueryResult } from "react-query";

type Matcher<T, U> = {
  Success: (result: T) => U;
  Loading: () => U;
  Error: (e: unknown) => U;
  Idle: () => U;
};

/**
 * Pattern match over React-query state
 */
export const matchState = <T, U>(
  state: UseQueryResult<T>,
  matcher: Matcher<T, U>
): U => {
  if (state.isLoading) {
    return matcher.Loading();
  }
  if (state.isError) {
    return matcher.Error(state.error);
  }
  if (state.isIdle) {
    return matcher.Idle();
  }
  return matcher.Success(state.data);
};
