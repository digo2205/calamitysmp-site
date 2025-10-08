import { Search, Command } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <img 
            src="https://legionlabs.gitbook.io/calamitysmp/~gitbook/image?url=https%3A%2F%2F3007065681-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FouI7WT4b8wRMZGqADgsO%252Fsites%252Fsite_uqqiE%252Flogo%252FpRFN8U6tfUMgg4TWIPbo%252Fcalamitysmp4.png%3Falt%3Dmedia%26token%3D638192a6-015d-46b6-8d4a-87911beb11fe&width=260&dpr=4&quality=100&sign=e52ec8d1&sv=2"
            alt="CalamitySMP Logo"
            className="w-8 h-8 rounded"
          />
          <span className="font-semibold text-gray-900">CalamitySMP</span>
        </div>
      </div>
    </header>
  )
}