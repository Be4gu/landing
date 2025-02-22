import Countdown from './components/countdown'
import { Twitch } from 'lucide-react'
export default function Home() {
  return (
    <main className='bg-[#121212] min-h-screen bg-custom-background text-custom-white'>
      <div className='container mx-auto px-4 py-12 md:py-24'>
        <div className='text-center space-y-12'>
          <h1 className='text-5xl md:text-7xl text-[#00B8D9] lg:text-8xl font-extrabold tracking-tight  animate-pulse'>¡EN PIÑATON.COM!</h1>

          <div className='max-w-2xl mx-auto space-y-6'>
            <p className='text-xl md:text-2xl text-[#E0E0E0] font-semibold'>Prepárate para una nueva experiencia. Estamos a punto de lanzar algo increíble.</p>
          </div>

          <div className='max-w-4xl mx-auto bg-[#1E1E1E] rounded-2xl p-8 border border-[#3A3A3A]'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 text-[#00B8D9]'>Nueva versión disponible en:</h2>
            <Countdown targetDate='2025-03-02T20:00:00' />
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
                {/* <span class='absolute -right-1 -top-1'>
                  <span class='relative flex h-3 w-3'>
                    <span class='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75'></span>
                    <span class='relative inline-flex h-3 w-3 rounded-full bg-red-500'></span>
                  </span>
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
