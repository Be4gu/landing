import Countdown from './components/countdown'
import { Twitch, BookText } from 'lucide-react'
export default function Home() {
  return (
    <main className='bg-[#121212] min-h-screen bg-custom-background text-custom-white'>
      <div className='container mx-auto px-4 py-12 md:py-24'>
        <div className='text-center space-y-12'>
          <h1 className='text-5xl md:text-7xl text-[#00B8D9] lg:text-8xl font-extrabold tracking-tight  animate-pulse'>¡EN PIÑATON.COM!</h1>

          <div className='max-w-2xl mx-auto space-y-6'>
            <h2 className='text-2xl font-bold mb-4 text-[#E0E0E0]'>Quiero ser una piñata 🎉</h2>
            <p className='text-lg mb-6 md:text-2xl text-[#E0E0E0]'>Rellena el formulario y creemos perfiles entre todos.</p>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLScY3HfR0XVtDs0lMdDbXSlVtu1AFYrLQlzOykZ1yZA6sG-dyg/viewform?usp=header'
              target='_blank'
              rel='noopener noreferrer'
              className='relative text-[#E0E0E0] inline-flex items-center gap-3 p-3 border  transition-colors duration-300 hover:border-[#00B8D9] border-gray-300 rounded-lg hover:no-underline'
            >
              <span className='text-xl font-semibold'>✨ ¡Me apunto! ✨</span>
            </a>
          </div>

          <div className='max-w-4xl mx-auto bg-[#1E1E1E] rounded-2xl p-8 border border-[#3A3A3A]'>
            <h2 className='text-2xl md:text-3xl font-bold mb-2 text-[#00B8D9]'>Nueva versión disponible en:</h2>
            <p className='mb-8 text-[#E0E0E0]'>Estoy trabajando en una WIKI para que dejéis de ser unas piñatas andantes.</p>
            <Countdown targetDate='2025-03-15T20:00:00' />
          </div>
          <div className='mt-12 space-y-4 max-w-2xl mx-auto text-[#E0E0E0]'>
            <p className='text-xl text-custom-secondary'>¡Puedes ver el desarrollo de la web en vivo en mi canal de Twitch! 🚀</p>
            <div className='flex items-center justify-center p-6'>
              <a
                href='https://twitch.tv/entrellaves'
                target='_blank'
                rel='noopener noreferrer'
                className='relative  inline-flex items-center gap-3 p-5 border  transition-colors duration-300 hover:border-[#00B8D9] border-gray-300 rounded-lg hover:no-underline'
              >
                <Twitch className='h-6 w-6 text-purple-500' />
                <span className='text-xl font-semibold'>Entrellaves</span>
                <span className='absolute -right-1 -top-1'>
                  <span className='relative flex h-3 w-3'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75'></span>
                    <span className='relative inline-flex h-3 w-3 rounded-full bg-red-500'></span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
