import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, XCircle, MessageSquareWarning, Target, Scale, Ban, Skull, TriangleAlert, BookMarked } from 'lucide-react'
import { Link } from 'react-router-dom'
export function DefinicoesPage() {
  const examples = [
    {
      type: "correct",
      title: "Exemplo Correto",
      scenario: "Você está num local perigoso",
      action: "Você interpreta o medo, hesitação e cautela do seu personagem.",
      icon: CheckCircle,
      color: "bg-green-50 border-green-200"
    },
    {
      type: "incorrect",
      title: "Exemplo Incorreto",
      scenario: "Você está num local perigoso",
      action: "Você ignora os perigos e age como se nada estivesse acontecendo.",
      icon: XCircle,
      color: "bg-red-50 border-red-200"
    }
  ]
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <BookMarked className="w-5 h-5 text-gray-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Definições
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">O que é Hard-RP?</p>
                <p>Hard Roleplay é um estilo de jogo onde os jogadores devem manter-se rigorosamente 
                em personagem, respeitando as limitações realistas e consequências de suas ações. Resumidamente, RP-ON o tempo inteiro.</p>
              </div>
            </div>
          </Card>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Princípios Fundamentais</h2>
            <div className="space-y-4">
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
  <Target className="w-5 h-5 text-gray-900" />
  <h3 className="text-lg font-semibold text-gray-900">Imersão Total</h3>
</div>

                <p className="text-gray-700">
                  Você deve pensar, agir e reagir como seu personagem faria, não como você faria. 
                  Considere a personalidade, história e limitações do seu personagem. Tente manter o roleplay ativo o tempo inteiro (hard-rp).
                </p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
  <Scale className="w-5 h-5 text-gray-900" />
  <h3 className="text-lg font-semibold text-gray-900">Consequências Realistas</h3>
</div>


                <p className="text-gray-700">
                  Todas as ações têm consequências. Decisões ruins têm repercussões, e você tem medo da morte ou situações de risco, assim como qualquer outro ser humano.
                </p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
  <Skull className="w-5 h-5 text-gray-900" />
    <h3 className="text-lg font-semibold text-gray-900">Random Death Match</h3>
</div>


                <p className="text-gray-700">
                  Matar jogadores, pets, semelhantes sem motivo aparente na lore, é considerado uma prática "chata" e desrespeitosa.
                </p>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
  <Ban className="w-5 h-5 text-gray-900" />
  <h3 className="text-lg font-semibold text-gray-900">Sem Informações OOC (Metagaming)</h3>
</div>

                <p className="text-gray-700">
                  Seu personagem só sabe o que vivenciou ou aprendeu no jogo. 
                  Não use informações obtidas fora do roleplay (Discord, streams, etc.).
                </p>
              </Card>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Exemplos Práticos</h2>
            <div className="space-y-4">
              {examples.map((example, index) => (
                <Card key={index} className={`p-4 ${example.color}`}>
                  <div className="flex items-start gap-3">
                    <example.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">{example.title}</h4>
                      <p className="text-sm mb-2"><strong>Situação:</strong> {example.scenario}</p>
                      <p className="text-sm"><strong>Ação:</strong> {example.action}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Regras Específicas</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fear RP:</strong> Seu personagem deve demonstrar medo em situações perigosas</li>
                <li><strong>Memory RP:</strong> Personagens podem esquecer eventos</li>
                <li><strong>Aging RP:</strong> Personagens envelhecem e suas personalidades mudam</li>
                <li><strong>Hard RP:</strong> Seguir o roleplay o tempo todo</li>
                <li><strong>Random Death Match (RDM):</strong> Matar jogadores sem motivo aparente</li>
                <li><strong>Metagaming:</strong> Usar conhecimentos externos dentro do jogo</li>
              </ul>
            </div>
          </div>
          <Card className="p-4 bg-amber-50 border-amber-200">
            <div className="flex items-center gap-2 mb-2">
  <TriangleAlert className="w-5 h-5 text-amber-800" />
  <h4 className="font-semibold text-amber-800">Violações Comuns</h4>
</div>

            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Usar informações OOC no roleplay</li>
              <li>• Quebrar o personagem para fazer piadas</li>
              <li>• Não demonstrar medo em situações perigosas</li>
              <li>• Tentar "ganhar" todas as situações</li>
            </ul>
          </Card>
          <div className="flex justify-between gap-4">
            <Link to="/principal/faq" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">FAQ</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/principal/criacao-de-personagem" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Criação de Personagem</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}