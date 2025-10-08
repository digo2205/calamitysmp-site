import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { WelcomePage } from './pages/WelcomePage'
import { HistoriaPage } from './pages/HistoriaPage'
import { DiretrizesPage } from './pages/DiretrizesPage'
import { FAQPage } from './pages/FAQPage'
import { ItensBanidosPage } from './pages/ItensBanidosPage'
import { RedesSociaisPage } from './pages/RedesSociaisPage'
import { CriacaoPersonagemPage } from './pages/CriacaoPersonagemPage'
import { FormulariosPage } from './pages/FormulariosPage'
import { HardRPPage } from './pages/HardRPPage'
import { MetaGamingPage } from './pages/MetaGamingPage'
import { RandomDeathMatchPage } from './pages/RandomDeathMatchPage'
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/principal/lore" element={<HistoriaPage />} />
              <Route path="/principal/diretrizes" element={<DiretrizesPage />} />
              <Route path="/principal/faq" element={<FAQPage />} />
              <Route path="/principal/itens-banidos" element={<ItensBanidosPage />} />
              <Route path="/principal/redes-sociais" element={<RedesSociaisPage />} />
              <Route path="/dicas/criacao-de-personagem" element={<CriacaoPersonagemPage />} />
              <Route path="/inscricao/formularios" element={<FormulariosPage />} />
              <Route path="/definicoes/hard-rp" element={<HardRPPage />} />
              <Route path="/definicoes/meta-gaming" element={<MetaGamingPage />} />
              <Route path="/definicoes/random-death-match" element={<RandomDeathMatchPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
export default App