import { SobreMiPage } from './pages/SobreMiPage'
import { HabilidadesPage } from './pages/HabilidadesPage'
import { ProyectosPage } from './pages/ProyectosPage'
import { Navegation } from './components/Navegation'

function App() {
  return (
    <div>
      <Navegation />
      <main>
        <SobreMiPage />
        <HabilidadesPage />
        <ProyectosPage />
      </main>
    </div>
  );
}

export default App