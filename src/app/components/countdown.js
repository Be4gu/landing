'use client'

import { useEffect, useState } from 'react'

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const targetTime = new Date(targetDate).getTime() // Convertimos la fecha a milisegundos
    const currentTime = new Date().getTime() // Hora actual en milisegundos
    const difference = targetTime - currentTime

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  const timeBlocks = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ]

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 border-[#3A3A3A] '>
      {timeBlocks.map(({ label, value }) => (
        <div key={label} className='bg-[#121212] text-[#00B8D9] border-[#3A3A3A] rounded-xl p-4 border  transition-colors duration-300 hover:border-[#00B8D9]'>
          <span className='text-6xl md:text-5xl  font-bold  block mb-2'>{value.toString().padStart(2, '0')}</span>
          <span className='text-sm  text-[#E0E0E0]'>{label}</span>
        </div>
      ))}
    </div>
  )
}
