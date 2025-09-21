'use client'

interface TipButtonProps {
  onClick: () => void
  isLoading?: boolean
  variant?: 'default' | 'disabled' | 'loading'
  amount?: string
  className?: string
}

export function TipButton({ 
  onClick, 
  isLoading = false, 
  variant = 'default',
  amount,
  className = '' 
}: TipButtonProps) {
  const getButtonStyles = () => {
    switch (variant) {
      case 'disabled':
        return 'bg-gray-400 text-gray-600 cursor-not-allowed'
      case 'loading':
        return 'bg-orange-400 text-white cursor-wait'
      default:
        return 'bg-orange-500 text-white hover:bg-orange-600 active:scale-95'
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={isLoading || variant === 'disabled'}
      className={`
        px-6 py-2 rounded-md font-medium text-sm
        transition-all duration-200 ease-smooth
        ${getButtonStyles()}
        ${className}
      `}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Processing...
        </div>
      ) : (
        <>tip now{amount && ` ${amount}`}</>
      )}
    </button>
  )
}
