'use client'

import { useState } from 'react'

interface CreatorAvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CreatorAvatar({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}: CreatorAvatarProps) {
  const [imageError, setImageError] = useState(false)

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8'
      case 'lg':
        return 'w-16 h-16'
      default:
        return 'w-12 h-12'
    }
  }

  const getFallbackSize = () => {
    switch (size) {
      case 'sm':
        return 'text-xs'
      case 'lg':
        return 'text-xl'
      default:
        return 'text-sm'
    }
  }

  if (imageError || !src) {
    return (
      <div className={`
        ${getSizeClasses()} 
        bg-gradient-to-br from-accent to-blue-600 
        rounded-full flex items-center justify-center
        ${getFallbackSize()} font-semibold text-white
        ${className}
      `}>
        {alt.charAt(0).toUpperCase()}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className={`
        ${getSizeClasses()} 
        rounded-full object-cover border-2 border-gray-600
        ${className}
      `}
    />
  )
}
