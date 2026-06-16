import { useGridStore } from '../../store/gridStore';
import { PATTERN_INFO } from '../../utils/constants';
import type { PatternType } from '../../types/grid';

export function PatternSwitcher() {
  const { pattern, setPattern } = useGridStore();

  return (
    <div
      className="fixed top-20 left-1/2 transform -translate-x-1/2
                    flex flex-wrap justify-center gap-2 bg-white/90 backdrop-blur-sm
                    p-3 rounded-xl shadow-lg border border-gray-200 z-10 max-w-[90vw]"
    >
      {Object.entries(PATTERN_INFO).map(([key, info]) => {
        const patternKey = key as PatternType;
        const isActive = pattern === patternKey;
        return (
          <button
            key={key}
            onClick={() => setPattern(patternKey)}
            className={`px-4 py-2 rounded-lg transition-all text-sm font-medium flex items-center gap-2
              ${
                isActive
                  ? 'bg-blue-500 text-white shadow-md scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
          >
            <span>{info.icon}</span>
            {info.name}
          </button>
        );
      })}
    </div>
  );
}
