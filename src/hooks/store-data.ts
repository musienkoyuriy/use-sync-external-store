import { useRef, useCallback } from "react";

type Store = { first: string; last: string };

export const useStoreData = (): {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => () => void;
} => {
  const store = useRef({
    first: "",
    last: "",
  });
  const get = useCallback(() => store.current, []);
  const set = useCallback((value: Partial<Store>) => {
    store.current = {
      ...store.current,
      ...value,
    };
    subscribers.current?.forEach((s) => s());
  }, []);
  const subscribers = useRef(new Set<() => void>());
  const subscribe = (callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  };

  return { get, set, subscribe };
};

export type UseStoreDataReturnType = ReturnType<typeof useStoreData>;
