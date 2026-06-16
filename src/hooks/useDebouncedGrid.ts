import { useDebouncedCallback } from 'use-debounce';
import { useGridStore } from '../store/gridStore';

export function useDebouncedGrid() {
  const setSpacing = useGridStore(state => state.setSpacing);
  const setOpacity = useGridStore(state => state.setOpacity);

  const debouncedSetSpacing = useDebouncedCallback(
    (value: number) => setSpacing(value),
    16, // ~60fps
  );

  const debouncedSetOpacity = useDebouncedCallback((value: number) => setOpacity(value), 16);

  return { debouncedSetSpacing, debouncedSetOpacity };
}
