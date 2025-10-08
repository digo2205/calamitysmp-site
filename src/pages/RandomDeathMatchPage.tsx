import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronLeft, AlertTriangle, CheckCircle, XCircle, Sword } from 'lucide-react'
import { Link } from 'react-router-dom'
export function RandomDeathMatchPage() {
  const scenarios = [
    {
      type: "rdm",
      title: "❌ RDM - Proibido",
      situation: "Você vê um jogador desconhecido caminhando",
      action: "Você o ataca sem motivo ou interação prévia",
      reason: "Não há justificativa roleplay para o ataque",
      color: "bg-red-50 border-red-200"
    },
    {
      type: "valid",
      title: "✅ PvP Válido",
      situation: "Um jogador roubou seus itens e fugiu",
      action: "Você o persegue e inicia combate para recuperar seus bens",
      reason: "Há justificativa clara e desenvolvimento roleplay",
      color: "bg-green-50 border-green-200"
    },
    {
      type: "rdm",
      title: "❌ RDM - Proibido",
      situation: "Você não gosta do personagem de outro jogador",
      action: "Você o mata porque 'não gosta dele'",
      reason: "Antipatia pessoal não é motivo válido para PvP",
      color: "bg-red-50 border-red-200"
    },
    {
      type: "valid",
      title: "✅ PvP Válido",
      situation: "Dois grupos têm conflito territorial estabelecido",
      action: "Membros dos grupos se enfrentam na área disputada",
      reason: "Conflito desenvolvido através de roleplay",
      color: "bg-green-50 border-green-200"
    }
  ]
  const validReasons = [
    "Autodefesa legítima",
    "Defesa de propriedade ou território",
    "Conflitos desenvolvidos através de roleplay",
    "Guerras entre facções/grupos",
    "Vingança por ações passadas (com desenvolvimento)",
    "Defesa de aliados ou familiares",
    "Cumprimento de contratos/missões estabelecidas no RP"
  ]
  const invalidReasons = [
    "Tédio ou vontade de lutar",
    "Antipatia pessoal (OOC)",
    "Teste de equipamentos/habilidades",
    "Provocação sem contexto",
    "Roubo de itens sem roleplay",
    "Mata por diversão",
    "Conflitos baseados em informações OOC"
  ]
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                ⚔️
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Random Death Match (RDM)
              </h1>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <span>💬</span>
              Perguntar
            </Button>
          </div>
        </header>
        <div className="space-y-6">
          <Card className="p-4 bg-red-50 border-red-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-red-800">
                <p className="font-semibold mb-1">Definição</p>
                <p>Random Death Match (RDM) é o ato de atacar ou matar outro jogador 
                sem justificativa adequada de roleplay ou desenvolvimento de história.</p>
              </div>
            </div>
          </Card>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regra Fundamental</h2>
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Sword className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  <strong>Todo PvP deve ter justificativa roleplay válida.</strong> Não é permitido 
                  atacar outros jogadores sem motivo desenvolvido através de interações no jogo.
                </p>
              </div>
            </Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Motivos Válidos para PvP</h2>
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Justificativas Aceitas
              </h3>
              <ul className="space-y-2">
                {validReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Motivos Inválidos (RDM)</h2>
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Justificativas Rejeitadas
              </h3>
              <ul className="space-y-2">
                {invalidReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Exemplos Práticos</h2>
            <div className="space-y-4">
              {scenarios.map((scenario, index) => (
                <Card key={index} className={`p-4 ${scenario.color}`}>
                  <h4 className="font-semibold mb-2">{scenario.title}</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Situação:</strong> {scenario.situation}</p>
                    <p><strong>Ação:</strong> {scenario.action}</p>
                    <p><strong>Análise:</strong> {scenario.reason}</p>
                  </div>
                </Card>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Processo Recomendado</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Desenvolvimento</h3>
                <p className="text-gray-700 text-sm">
                  Construa a tensão através de roleplay. Interaja com o outro jogador, 
                  desenvolva o conflito gradualmente.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Escalação</h3>
                <p className="text-gray-700 text-sm">
                  Permita que o conflito escale naturalmente. Dê oportunidades para 
                  resolução pacífica antes de partir para violência.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Justificativa Clara</h3>
                <p className="text-gray-700 text-sm">
                  Certifique-se de que há motivo claro e compreensível para o conflito. 
                  Outros jogadores devem entender o porquê.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Execução</h3>
                <p className="text-gray-700 text-sm">
                  Realize o PvP de forma justa, respeitando as regras de Fear RP e 
                  outras diretrizes do servidor.
                </p>
              </Card>
            </div>
          </div>
          <Card className="p-4 bg-amber-50 border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Punições por RDM</h4>
            <div className="text-sm text-amber-700 space-y-1">
              <p><strong>Primeira ofensa:</strong> Advertência + ressarcimento da vítima</p>
              <p><strong>Segunda ofensa:</strong> Ban temporário (1-3 dias)</p>
              <p><strong>Terceira ofensa:</strong> Ban temporário (1 semana)</p>
              <p><strong>Reincidência:</strong> Ban permanente</p>
            </div>
          </Card>
          <Card className="p-4 bg-green-50 border-green-200">
            <p className="text-sm text-green-800">
              <strong>Dica:</strong> Quando em dúvida, sempre priorize o roleplay sobre o combate. 
              É melhor desenvolver uma história interessante do que vencer uma luta.
            </p>
          </Card>
          <div className="flex justify-between gap-4">
            <Link to="/definicoes/meta-gaming" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Meta-gaming</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <div className="flex-1">
              <Card className="p-4 border border-gray-200 opacity-50">
                <div className="flex items-center justify-center">
                  <p className="text-sm text-gray-500">Última página</p>
                </div>
              </Card>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Atualizado há 5 dias
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}