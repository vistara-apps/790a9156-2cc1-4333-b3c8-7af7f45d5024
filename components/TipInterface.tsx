'use client'

import { useState } from 'react'
import { TipButton } from './TipButton'
import { useMiniKit } from '@coinbase/minikit'

export function TipInterface() {
  const { context } = useMiniKit()
  const [tipPercentage] = useState(16) // Mock percentage based on likes
  const [isLoading, setIsLoading] = useState(false)

  const handleTip = async () => {
    setIsLoading(true)
    try {
      // Simulate tip processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      // Here you would integrate with Base wallet for actual tipping
      console.log('Tip processed successfully')
    } catch (error) {
      console.error('Tip failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      {/* Main tip circle */}
      <div className="tip-circle">
        <div className="tip-circle-content">
          <p className="text-gray-600 text-sm mb-2">Like like counts</p>
          <p className="text-4xl font-bold text-black mb-2">{tipPercentage}%</p>
          <TipButton 
            onClick={handleTip}
            isLoading={isLoading}
            variant="default"
          />
        </div>
        
        {/* Coin icon */}
        <div className="coin-icon">
          <span className="text-lg">$</span>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -inset-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full opacity-20 -z-10"></div>
    </div>
  )
}
