import { GridBackground } from './components/Canvas/GridBackground';
import { Ruler } from './components/Controls/Ruler';
import { ControlPanel } from './components/Controls/ControlPanel';

function App() {
  return (
    <>
      <Ruler />
      <GridBackground />
      <ControlPanel />
      <div className="fixed bottom-[15px] right-5 text-[11px] text-[#999] z-[100] print:hidden">
        designed and developed by <strong className="text-[#555]">Rostislav Blaha</strong> &bull;
        Re-engineered 2026
      </div>
    </>
  );
}

export default App;
