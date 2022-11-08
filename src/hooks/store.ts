import { useContext, useSyncExternalStore } from "react";
import { StoreContext } from "../context";

type Store = { first: string; last: string };

export function useStore(
  selector: (s: Store) => any
): [any, (value: Partial<Store>) => void] {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("No store!");
  }

  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.get())
  );

  console.log(state);

  return [state, store.set];
}
