import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
export function MetaGamingPage() {
  const examples = [
    {
      type: "violation",
      title: "❌ Violação de Meta-gaming",
      scenario: "Você viu no Discord que haverá um ataque à sua cidade hoje à noite",
      action: "Você prepara defesas e avisa outros jogadores sem justificativa roleplay",
      consequence: "Isso é meta-gaming pois usa informação OOC",
      color: "bg-red-50 border-red-200"
    },
    {
      type: "correct",
      title: "✅ Comportamento Correto",
      scenario: "Você viu no Discord que haverá um ataque à sua cidade hoje à noite",
      action: "Você ignora essa informação e age apenas com base no que seu personagem sabe",
      consequence: "Seu personagem pode ser pego de surpresa, mas é o correto",
      color: "bg-green-50 border-green-200"
    }
  ]
  const sources = [
    {
      source: "Discord/Chat OOC",
      examples: ["Conversas sobre eventos futuros", "Discussões sobre outros jogadores", "Informações sobre localização de itens"]
    },
    {
      source: "Streams/Vídeos",
      examples: ["Assistir stream de outro jogador", "Ver vídeos sobre o servidor", "Informações sobre bases secretas"]
    },
    {
      source: "Interface do Jogo",
      examples: ["Nametags de jogadores", "Coordenadas no F3", "Informações do TAB"]
    },
    {
      source: "Comunicação Externa",
      examples: ["WhatsApp/Telegram", "Chamadas de voz", "Redes sociais"]
    }
  ]
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                🧠
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Meta-gaming
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
                <p>Meta-gaming é o uso de informações obtidas fora do contexto do roleplay 
                (OOC - Out of Character) para beneficiar seu personagem no jogo.</p>
              </div>
            </div>
          </Card>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Por que é Proibido?</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🎭 Quebra a Imersão</h3>
                <p className="text-gray-700">
                  Meta-gaming destrói a experiência de roleplay ao misturar conhecimento 
                  do jogador com conhecimento do personagem.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">⚖️ Vantagem Injusta</h3>
                <p className="text-gray-700">
                  Dá vantagens desleais sobre outros jogadores que seguem as regras 
                  e mantêm separação entre IC e OOC.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🤝 Prejudica Outros</h3>
                <p className="text-gray-700">
                  Pode arruinar planos, surpresas e momentos especiais de outros jogadores.
                </p>
              </Card>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Fontes Comuns de Meta-gaming</h2>
            <div className="space-y-4">
              {sources.map((source, index) => (
                <Card key={index} className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{source.source}</h3>
                  <ul className="text-gray-700 space-y-1">
                    {source.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Exemplos Práticos</h2>
            <div className="space-y-4">
              {examples.map((example, index) => (
                <Card key={index} className={`p-4 ${example.color}`}>
                  <h4 className="font-semibold mb-2">{example.title}</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Situação:</strong> {example.scenario}</p>
                    <p><strong>Ação:</strong> {example.action}</p>
                    <p><strong>Resultado:</strong> {example.consequence}</p>
                  </div>
                </Card>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Como Evitar</h2>
            <Card className="p-4 bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">💡 Dicas Práticas</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• <strong>Separação Mental:</strong> Mantenha conhecimento do jogador separado do personagem</li>
                <li>• <strong>Justificativa IC:</strong> Sempre tenha uma razão roleplay para suas ações</li>
                <li>• <strong>Evite Fontes OOC:</strong> Minimize exposição a informações externas durante o jogo</li>
                <li>• <strong>Comunique Dúvidas:</strong> Pergunte aos admins se não tem certeza</li>
                <li>• <strong>Aceite Consequências:</strong> Deixe seu personagem falhar às vezes</li>
              </ul>
            </Card>
          </div>
          <Card className="p-4 bg-amber-50 border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Punições</h4>
            <div className="text-sm text-amber-700 space-y-1">
              <p><strong>Primeira vez:</strong> Advertência e orientação</p>
              <p><strong>Reincidência:</strong> Kick temporário</p>
              <p><strong>Casos graves:</strong> Ban temporário (1-7 dias)</p>
              <p><strong>Casos extremos:</strong> Ban permanente</p>
            </div>
          </Card>
          <div className="flex justify-between gap-4">
            <Link to="/definicoes/hard-rp" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Hard-RP</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/definicoes/random-death-match" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Random Death Match</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          </div>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Atualizado há 7 dias
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}