import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  BookOpenText, 
  HelpCircle, 
  Ban, 
  Hash, 
  UserPen, 
  ListCheck, 
  NotebookPen,
  BookMarked
} from 'lucide-react'

export function Sidebar({ mobile }: { mobile?: boolean }) {
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: 'Bem-vindo(a) ao CalamitySMP!', path: '/' },
  ]

  const sections = [
    {
      title: 'PRINCIPAL',
      items: [
        { icon: BookOpenText, label: 'História', path: '/principal/lore' },
        { icon: ListCheck, label: 'Diretrizes', path: '/principal/diretrizes' },
        { icon: HelpCircle, label: 'FAQ', path: '/principal/faq' },
        { icon: BookMarked, label: 'Definições', path: '/principal/definicoes' },
        { icon: UserPen, label: 'Regras/Dicas de Criação de Personagem', path: '/principal/criacao-de-personagem' },
        { icon: Ban, label: 'Itens Banidos', path: '/principal/itens-banidos' },
        { icon: Hash, label: 'Redes Sociais', path: '/principal/redes-sociais' },
      ]
    },
    {
      title: 'INSCRIÇÃO',
      items: [
        { icon: NotebookPen, label: 'Formulários', path: '/inscricao/formularios' },
      ]
    }
  ]

  return (
    <aside
      className={`
        flex flex-col overflow-y-auto
        ${mobile 
          ? 'w-60 h-full bg-transparent p-0' 
          : 'w-64 bg-gray-50 border border-gray-200 rounded-xl fixed top-20 left-8 h-[calc(80vh)] p-4 shadow-lg'}
      `}
    >
      <nav className="space-y-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              location.pathname === item.path
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
