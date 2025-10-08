import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, User, Lightbulb, NotebookPen, UserRoundSearch, TriangleAlert, Check, UserPen } from 'lucide-react'
import { Link } from 'react-router-dom'
export function CriacaoPersonagemPage() {
  const characterSteps = [
    {
      title: "1. Identidade",
      description: "Defina quem é seu personagem",
      icon: <User className="w-5 h-5 text-blue-600" />,
      tips: [
        "Qual é o nome do seu personagem? (considere utilizar nomes antigos como, Dante, Isabela, etc)",
        "Qual é a origem do seu personagem?",
        "O que ele era antes da explosão?"
      ]
    },
    {
      title: "2. História",
      description: "Desenvolva a história do seu personagem",
      icon: <NotebookPen className="w-5 h-5 text-blue-600" />,
      tips: [
        "O que ele fazia para viver?",
        "Como era sua vida?",
        "Tinha família ou amigos?",
        "Como são suas memórias SUPERFICIAIS do passado?"
      ]
    },
    {
      title: "3. Personalidade",
      description: "Descreva a personalidade",
      icon: <UserRoundSearch className="w-5 h-5 text-blue-600" />,
      tips: [
        "Como sua forma de pensar do século XIX pode entrar em conflito com a atualidade mágica?",
        "Você é mais curioso ou cauteloso diante de um mundo novo?",
        "Quais são suas virtudes e defeitos?",
        "Quais medos e fobias você tem?",
        "Quais eram seus hobbies e interesses?",
        "Mantém valores antigos (honra, fé, tradição) ou está disposto a mudar?"
      ]
    }
  ]
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
  <UserPen className="w-5 h-5 text-gray-600" />
</div>
              <h1 className="text-3xl font-bold text-gray-900">
                Criação de Personagem
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <p className="text-gray-600">
            Criar um personagem envolvente é essencial para uma boa experiência de roleplay. 
            Siga este guia para desenvolver um personagem memorável e coerente com o mundo do CalamitySMP.
          </p>
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Dica Importante</p>
                <p>Lembre-se que sua história deve contar como era sua vida em 1815, até o momento da explosão de mana.</p>
              </div>
            </div>
          </Card>
          <div className="space-y-6">
            {characterSteps.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Perguntas para refletir:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-6 bg-amber-50 border-amber-200">
            <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
  <TriangleAlert className="w-5 h-5" />
  Coisas a Evitar
</h3>

            <ul className="text-sm text-amber-700 space-y-2">
              <li>• <strong>Personagens "perfeitos":</strong> Todo mundo tem defeitos e limitações</li>
              <li>• <strong>Histórias muito trágicas:</strong> Equilibre drama com esperança</li>
              <li>• <strong>Personalidades extremas:</strong> Pessoas reais são complexas</li>
            </ul>
          </Card>
          <Card className="p-4 bg-green-50 border-green-200">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
  <Check className="w-5 h-5" />
  Checklist Final
</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700">
              <div>□ Nome e idade definidos</div>
              <div>□ Profissão ou papel social</div>
              <div>□ História pessoal coerente</div>
              <div>□ Personalidade balanceada</div>
              <div>□ Motivações claras</div>
              <div>□ Conexão com sua vida de 1815</div>
            </div>
          </Card>
          <div className="flex justify-between gap-4">
            <Link to="/principal/redes-sociais" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">Redes Sociais</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/inscricao/formularios" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">Formulários</h3>
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