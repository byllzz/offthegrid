import { GridBackground } from './components/Canvas/GridBackground';
import { Ruler } from './components/Controls/Ruler';
import { ControlPanel } from './components/Controls/ControlPanel';

function App() {
  return (
    <>
      <Ruler />
      <GridBackground />
      <ControlPanel />
      <div className="fixed bottom-[15px] font-normal right-5 text-[16px] text-[#222] z-[100] print:hidden">
        designed and developed by <strong className="text-[#000000]">Bilal Malik</strong>
      </div>
    </>
  );
}

export default App;
