import { AppShell } from '@/components/AppShell'
import { TipInterface } from '@/components/TipInterface'
import { CreatorProfile } from '@/components/CreatorProfile'

export default function HomePage() {
  return (
    <AppShell>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="text-center pt-16 pb-8 px-4">
          <h1 className="text-2xl font-semibold mb-4">
            your base miniapp
          </h1>
          <p className="text-gray-400 text-base leading-7 max-w-md mx-auto">
            Tip tip content treaters base at rernums of the number of likes on your posts receives.
          </p>
        </div>

        {/* Main Tip Interface */}
        <div className="flex justify-center px-4 mb-8">
          <TipInterface />
        </div>

        {/* Creator Profile Section */}
        <div className="px-4 max-w-xl mx-auto">
          <CreatorProfile />
        </div>
      </div>
    </AppShell>
  )
}
