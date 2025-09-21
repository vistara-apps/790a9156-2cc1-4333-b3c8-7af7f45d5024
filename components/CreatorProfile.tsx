'use client'

import { useState, useEffect } from 'react'
import { CreatorAvatar } from './CreatorAvatar'
import { useMiniKit } from '@coinbase/minikit'

interface Creator {
  farcasterId: string
  displayName: string
  username: string
  avatar: string
  baseWalletAddress: string
  isTippingEnabled: boolean
  defaultTipAmount: string
  totalTipsReceived: number
}

export function CreatorProfile() {
  const { context } = useMiniKit()
  const [creator, setCreator] = useState<Creator | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Mock creator data - in real app, fetch from Farcaster API
    const mockCreator: Creator = {
      farcasterId: context?.user?.fid?.toString() || '12345',
      displayName: context?.user?.displayName || 'Creator Name',
      username: context?.user?.username || 'creator',
      avatar: context?.user?.pfpUrl || '/default-avatar.png',
      baseWalletAddress: '0x1234...5678',
      isTippingEnabled: true,
      defaultTipAmount: '0.001 ETH',
      totalTipsReceived: 42
    }

    setTimeout(() => {
      setCreator(mockCreator)
      setIsLoading(false)
    }, 1000)
  }, [context])

  if (isLoading) {
    return (
      <div className="card animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
            <div className="h-3 bg-gray-700 rounded w-24"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!creator) {
    return (
      <div className="card text-center">
        <p className="text-gray-400">No creator profile found</p>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <CreatorAvatar 
          src={creator.avatar}
          alt={creator.displayName}
          size="lg"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">
            {creator.displayName}
          </h3>
          <p className="text-gray-400">@{creator.username}</p>
          <p className="text-sm text-gray-500">
            FID: {creator.farcasterId}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-700 rounded-md">
          <p className="text-2xl font-bold text-accent">
            {creator.totalTipsReceived}
          </p>
          <p className="text-sm text-gray-400">Tips Received</p>
        </div>
        <div className="text-center p-3 bg-gray-700 rounded-md">
          <p className="text-lg font-semibold text-white">
            {creator.defaultTipAmount}
          </p>
          <p className="text-sm text-gray-400">Default Tip</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            creator.isTippingEnabled ? 'bg-green-500' : 'bg-red-500'
          }`}></div>
          <span className="text-sm text-gray-400">
            Tipping {creator.isTippingEnabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        
        <button className="text-sm text-accent hover:text-blue-400 transition-colors duration-200">
          View Profile
        </button>
      </div>
    </div>
  )
}
