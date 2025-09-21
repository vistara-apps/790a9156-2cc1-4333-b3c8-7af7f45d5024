// Core data models for LikeTipz

export interface User {
  farcasterId: string
  baseWalletAddress: string
  displayName?: string
  username?: string
  avatar?: string
}

export interface Tip {
  tipId: string
  tipperFarcasterId: string
  recipientCreatorId: string
  amount: string
  timestamp: number
  transactionHash: string
  status: 'pending' | 'confirmed' | 'failed'
}

export interface CreatorProfile {
  farcasterId: string
  baseWalletAddress: string
  isTippingEnabled: boolean
  defaultTipAmount: string
  totalTipsReceived: number
  totalTipAmount: string
}

export interface FarcasterPost {
  castId: string
  authorFid: string
  text: string
  timestamp: number
  likes: number
  replies: number
  recasts: number
}

export interface TipSession {
  sessionId: string
  postId: string
  creatorId: string
  tipperContext: {
    fid: string
    address: string
  }
  amount: string
  status: 'initiated' | 'processing' | 'completed' | 'failed'
}

// API Response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

// MiniKit context types
export interface MiniKitContext {
  user?: {
    fid?: number
    displayName?: string
    username?: string
    pfpUrl?: string
  }
  client?: {
    name: string
    version: string
  }
}
