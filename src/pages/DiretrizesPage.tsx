import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { ChevronRight, ChevronLeft, Info, AlertTriangle, ListCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
export function DiretrizesPage() {
  return (
    <div className="max-w-screen-2xl py-8 px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
  <ListCheck className="w-5 h-5 text-gray-600" />
</div>

              <h1 className="text-3xl font-bold text-gray-900">
                Diretrizes
              </h1>
            </div>
          </div>
        </header>
        <div className="space-y-6">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diretrizes do Servidor</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Discriminação</h3>
                <p className="text-gray-700">
                  É estritamente proibido qualquer tipo de preconceito no servidor, seja racismo, homofobia, xenofobia, intolerância religiosa, entre outros.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Respeito</h3>
                <p className="text-gray-700">
                  Pedimos para todos os membros que não desrespeitem ninguém, trate todos como você gostaria de ser tratado, sem discriminar ou ofender alguém.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Assédio</h3>
                <p className="text-gray-700">
                  Qualquer tipo de assédio, perseguição, intimidação, ou mesmo, abuso é inadmissível em nosso servidor.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Discussões</h3>
                <p className="text-gray-700">
                  Evite causar discussões, brigas, ou algo semelhante, afinal estamos aqui para jogar e nos divertir, e não para causar intriga.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Ameaças</h3>
                <p className="text-gray-700">
                  É intolerável qualquer tipo de ameaça, ataque pessoal, provocação, acusação falsa ou semelhante.
                </p>
              </div>
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Doxxing</h3>
                <p className="text-gray-700">
                  Não compartilhe dados pessoais de outros usuários sem permissão, seja foto do rosto, nome, entre outros.
                </p>
              </div>
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Spam</h3>
                <p className="text-gray-700">
                  Golpes, fraudes, spam, divulgações sem permissão ou coisa do gênero é proibido em nosso servidor.
                </p>
              </div>
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Links</h3>
                <p className="text-gray-700">
                  Não envie links maliciosos que possam, conter malwares, spywares ou semelhantes, você não gostaria de receber um link desse gênero.
                </p>
              </div>
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Conteúdo</h3>
                <p className="text-gray-700">
                  Nenhum conteúdo NSFW deve ser compartilhado no servidor, seja gore, pornografia ou qualquer outro tipo de material pertubador; também se encaixa nessa diretriz, assuntos como, drogas ilegais, armas reais, etc.
                </p>
              </div> 
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Flood</h3>
                <p className="text-gray-700">
                  Não spamme ou floode mensagens em bate-papos, são atitudes que incomodam e atrapalham a conversa ou jogatina.
                </p>
              </div>              
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">11. Comportamentos</h3>
                <p className="text-gray-700">
                  Seja comportado, não pratique atos que prejudiquem a experiência dos usuários (por exemplo, spawnkill).
                </p>
              </div>     
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">12. Incentivo</h3>
                <p className="text-gray-700">
                  Não pratique e não incentive ódio, violência, extremismo, ou qualquer outra coisa que "não seja legal".
                </p>
              </div>    
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">13. Assuntos</h3>
                <p className="text-gray-700">
                  Evite comentar sobre assuntos que possam provocar gatilhos em algumas pessoas.
                </p>
              </div>    
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">14. Cheats</h3>
                <p className="text-gray-700">
                  Qualquer tipo de cheat, programas externos que oferecem vantagem ao jogador, ou mesmo scripts maliciosos não são permitidos.
                </p>
              </div>        
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">15. Colaboração</h3>
                <p className="text-gray-700">
                  Respeite as regras de eventos, horários de roleplay e lore, ou semelhantes.
                </p>
              </div>    
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">16. Trapaças</h3>
                <p className="text-gray-700">
                  Não tente procurar bugs ou falhas, mantenha o espírito da diversão.
                </p>
              </div>
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">17. Instruções</h3>
                <p className="text-gray-700">
                  Siga as intruções dada pelos moderadores ou administradores do servidor, seja em eventos, momentos de roleplay ou semelhantes.
                </p>
              </div>      
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">18. Ações Pertubadoras</h3>
                <p className="text-gray-700">
                  Qualquer outra atitude considerada assustadora, irritante ou repetitiva pelos usuários, pode se encaixar nestra diretriz.
                </p>
              </div>             
          <Card className="p-4 bg-red-50 border-red-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-red-800">
                <p className="font-semibold mb-1">Importante</p>
                <p>As diretrizes do servidor valem para o servidor do Discord e para o servidor do Minecraft.</p>
              </div>
            </div>
          </Card>                                                                          
            </div>
                <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Diretrizes do Roleplay</h2>
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Hard-RP</h3>
                <p className="text-gray-700">
                  Siga o roleplay o tempo em que você estiver on-line no servidor, isso significa que, você não vai "gerar" conhecimento, por exemplo: aprender "magicamente" a como fazer um ritual absurdamente complexo; você terá de estudar para aprender a fazer as coisas dentro do servidor.
                </p>
              </div>   
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Anti-RP</h3>
                <p className="text-gray-700">
                  Não saia do roleplay em momentos de roleplay.
                </p>
              </div>  
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Interpretação</h3>
                <p className="text-gray-700">
                  Se você criou um personagem, você deve interpretá-lo, mesmo que pareça vergonha alheia.
                </p>
              </div>     
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Off-RP</h3>
                <p className="text-gray-700">
                  Em momentos onde não há nada acontecendo no RP, e você esteja em um local privado com amigos, é permitido sim acontecer uma resenha fora do roleplay (RP), mas ainda sim, você não pode "gerar" conhecimento; caso alguém apareça falando algo sobre a lore ou algo aconteça no roleplay todos devem voltar imediatamente ao personagem.
                </p>
              </div>   
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Metagaming</h3>
                <p className="text-gray-700">
                  Na "vida real" não é possível gerar conhecimento, aqui, também não, mesmo em momentos de resenha, caso você seja pego fazendo isso, poderá resultar em uma punição grave; resumindo, você deve usar conhecimento que você conseguiu jogando.
                </p>
              </div>    
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Calls</h3>
                <p className="text-gray-700">
                  Evite ficar em chamadas externas, tente ficar o máximo possível imerso no seu roleplay.
                </p>
              </div> 
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Random Death Match (RDM)</h3>
                <p className="text-gray-700">
                  Não mate jogadores, ou semelhantes sem razão aparente na lore.
                </p>
              </div>           
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Autonomia</h3>
                <p className="text-gray-700">
                  Na vida real você não chama um "administrador" para resolver seus problemas, o mesmo vale aqui, se precisar de algo, abra um ticket de atendimento em nosso servidor do Discord.
                </p>
              </div>         
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Preservação</h3>
                <p className="text-gray-700">
                  Mesmo em um ambiente onde a morte não é definitiva, a vida continua sendo algo precioso. Tratar a própria existência com descuido, se jogando em perigo sem motivo ou ignorando o instinto de sobrevivência, demonstra falta de respeito às regras do mundo.
                </p>
              </div>   
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10. Chat</h3>
                <p className="text-gray-700">
                  O chat do jogo também é on-roleplay, mas, evite usá-lo.
                </p>
              </div>                                                                                                                 
              </div>
                <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Diretrizes do Minecraft</h2>
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Lag</h3>
                <p className="text-gray-700">
                  Qualquer coisa que cause lag ou crashs no servidor será destruido sem aviso prévio, sejam máquinas, rituais, entre outros.
                </p>
              </div>   
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Construções</h3>
                <p className="text-gray-700">
                  Evite destruir construções, sejam pertencentes a lore ou a outros jogadores.
                </p>
              </div>  
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Roubo</h3>
                <p className="text-gray-700">
                  Evite roubar outros jogadores.
                </p>
              </div>     
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Modelos</h3>
                <p className="text-gray-700">
                  Não utilize outros modelos ou skins sem autorização da administração do servidor.
                </p>
              </div>   
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Guerras</h3>
                <p className="text-gray-700">
                  A lore não foi feita para haver muitos conflitos entre os jogadores, portanto, evite.
                </p>
              </div>    
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Waystones</h3>
                <p className="text-gray-700">
                  Não use barcos, ou qualquer outro bug para teletransportar mais de um jogador entre os obeliscos.
                </p>
              </div> 
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Elementais</h3>
                <p className="text-gray-700">
                  Mesmo que não seja seu, não o distrate, lembre-se que todos eles tem apenas duas vidas, não seja maldoso(a) com eles.
                </p>
              </div>           
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">8. Inatividade</h3>
                <p className="text-gray-700">
                  Se passar mais de duas semanas sem entrar no servidor, você será automaticamente desclassificado e todo o seu progresso e lore serão apagados; na lore seu personagem será dado como morto e você terá de criar um novo com outra história, personalidade e nome. Se você precisar ficar inativo por mais de duas semanas, independente do motivo, abra um ticket de atendimento em nosso servidor e avise nossa moderação.
                </p>
              </div>         
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">9. Vida</h3>
                <p className="text-gray-700">
                  Não ultrapasse quarenta corações de vida.
                </p>
              </div>   
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10. "Abuso"</h3>
                <p className="text-gray-700">
                  Não use bugs ao seu favor ou tente descobrir a identidade dos pets ou moderadores/administradores; e se descobrir a identidade, guarde para você, não espalhe.
                </p>
              </div>    
                <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">11. Placas & Livros</h3>
                <p className="text-gray-700">
                  Não edite placas ou livros pertencentes a lore; também evite deixar muitas placas por aí.
                </p>
              </div>                                                                                                                                  
              </div>              
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Punições</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Advertência:</strong> É geralmente utilizada antes de uma punição real, utilizadas normalmente para infrações leves.</li>
                <li><strong>Kick:</strong> Utilizada normalmente para infrações moderadas.</li>
                <li><strong>Banimento Temporário:</strong> Normalmente utilizada para infrações graves (12 horas - 30 dias).</li>
                <li><strong>Banimento Permanente:</strong> Utilizada geralmente para infrações graves ou gravíssimas.</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <Link to="/principal/lore" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Anterior</p>
                    <h3 className="font-semibold text-gray-900">História</h3>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/principal/faq" className="flex-1">
              <Card className="p-4 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Próximo</p>
                    <h3 className="font-semibold text-gray-900">FAQ</h3>
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