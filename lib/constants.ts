// Constants for LikeTipz application

export const APP_CONFIG = {
  name: 'LikeTipz',
  version: '1.0.0',
  description: 'Tip creators directly on their likes',
  url: 'https://liketipz.base.org',
} as const

export const NETWORK_CONFIG = {
  chainId: 8453, // Base mainnet
  chainName: 'Base',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrl: 'https://mainnet.base.org',
  blockExplorer: 'https://basescan.org',
} as const

export const TIP_CONFIG = {
  defaultAmount: '0.001', // ETH
  minAmount: '0.0001',
  maxAmount: '1.0',
  feePercentage: 2.5, // 2.5% platform fee
  supportedTokens: ['ETH', 'USDC'],
} as const

export const UI_CONFIG = {
  maxWidth: 'max-w-xl',
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spacing: {
    sm: '8px',
    md: '12px',
    lg: '20px',
  },
  animation: {
    duration: {
      fast: 150,
      base: 200,
      slow: 300,
    },
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
} as const

export const API_ENDPOINTS = {
  farcaster: {
    base: 'https://api.farcaster.xyz/v1',
    cast: (castId: string) => `/casts/${castId}`,
    user: (fid: string) => `/users/${fid}`,
  },
  base: {
    rpc: 'https://mainnet.base.org',
    explorer: 'https://basescan.org/api',
  },
} as const

export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Please connect your wallet to continue',
  INSUFFICIENT_BALANCE: 'Insufficient balance for this tip',
  TRANSACTION_FAILED: 'Transaction failed. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_AMOUNT: 'Please enter a valid tip amount',
  USER_REJECTED: 'Transaction was rejected by user',
  RATE_LIMITED: 'Too many requests. Please wait a moment.',
} as const

export const SUCCESS_MESSAGES = {
  TIP_SENT: 'Tip sent successfully!',
  PROFILE_UPDATED: 'Profile updated successfully',
  SETTINGS_SAVED: 'Settings saved',
} as const

export const STORAGE_KEYS = {
  USER_PREFERENCES: 'liketipz_user_prefs',
  TIP_HISTORY: 'liketipz_tip_history',
  CREATOR_SETTINGS: 'liketipz_creator_settings',
} as const
