import { useGridStore } from '../../store/gridStore';
import { UNIT_CONFIG } from '../../utils/constants';
import * as Slider from '@radix-ui/react-slider';

export function ControlPanel() {
  const { spacing, opacity, unit, setSpacing, setOpacity, resetToDefault } = useGridStore();
  const config = UNIT_CONFIG[unit];

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2
                    bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl
                    p-6 w-[90vw] max-w-2xl border border-gray-200 z-20"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Grid Configurator</h2>
        <button onClick={resetToDefault} className="text-sm text-blue-500 hover:text-blue-700">
          Reset to Default
        </button>
      </div>

      {/* Spacing Slider */}
      <div className="mb-5">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <label>Spacing</label>
          <span>
            {spacing} {unit}
          </span>
        </div>
        <Slider.Root
          value={[spacing]}
          onValueChange={([val]) => setSpacing(val)}
          min={config.min}
          max={config.max}
          step={config.step}
          className="relative flex items-center w-full h-5"
        >
          <Slider.Track className="bg-gray-200 relative flex-grow h-1 rounded-full">
            <Slider.Range className="absolute bg-blue-500 h-full rounded-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </Slider.Root>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>
            {config.min}
            {unit}
          </span>
          <span>
            {config.max}
            {unit}
          </span>
        </div>
      </div>

      {/* Opacity Slider + Color Swatch */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <label>Opacity / Contrast</label>
          <span>{Math.round(opacity * 100)}%</span>
        </div>
        <div className="flex items-center gap-4">
          <Slider.Root
            value={[opacity]}
            onValueChange={([val]) => setOpacity(val)}
            min={0}
            max={1}
            step={0.01}
            className="relative flex items-center flex-grow h-5"
          >
            <Slider.Track className="bg-gray-200 relative flex-grow h-1 rounded-full">
              <Slider.Range className="absolute bg-gray-800 h-full rounded-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-gray-800 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </Slider.Root>

          {/* Live Color Swatch */}
          <div
            className="w-12 h-12 border-2 border-gray-300 rounded shadow-sm flex-shrink-0"
            style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
          />
        </div>
      </div>

      {/* Unit Toggle & Ruler Toggle */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Units</span>
          <button
            onClick={() => useGridStore.getState().setUnit(unit === 'mm' ? 'in' : 'mm')}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
          >
            Switch to {unit === 'mm' ? 'Inches' : 'Millimeters'}
          </button>
        </div>
        <button
          onClick={() => useGridStore.getState().toggleRuler()}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          {useGridStore.getState().showRuler ? 'Hide Ruler' : 'Show Ruler'}
        </button>
      </div>
    </div>
  );
}
