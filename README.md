# LikeTipz - Base Mini App

A social-native tipping application built for Farcaster users on Base. LikeTipz enables instant, frictionless tipping of creators directly from their posts.

## Features

- **One-Click Tipping**: Tip creators instantly from Farcaster posts
- **Creator Tip Jar**: Visual tip amounts and contribution tracking
- **In-Frame Attribution**: Clear creator identification and transparency
- **Base Integration**: Low-cost, fast transactions on Base network
- **Social Native**: Built specifically for Farcaster ecosystem

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: MiniKit integration
- **UI**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd liketipz
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
# Add your API keys:
# NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key_here
# NEXT_PUBLIC_MINIKIT_API_KEY=your_key_here
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open in Base App**:
Navigate to `http://localhost:3000` in Base App or compatible Farcaster client.

## Architecture

### Core Components

- **AppShell**: Main application wrapper with MiniKit context
- **TipInterface**: Central tipping UI with percentage display
- **TipButton**: Reusable tipping action component
- **CreatorProfile**: Creator information and statistics
- **CreatorAvatar**: Profile image with fallback handling

### Data Models

- **User**: Farcaster ID and Base wallet association
- **Tip**: Transaction records with metadata
- **CreatorProfile**: Creator settings and statistics

### Key Features

1. **Tipping Flow**:
   - User views post in Farcaster
   - Clicks tip button in LikeTipz frame
   - Confirms amount and transaction
   - Base wallet processes payment
   - Confirmation and recording

2. **Creator Setup**:
   - Connect Farcaster account
   - Link Base wallet
   - Configure tipping preferences
   - Enable on posts

## API Integration

- **Farcaster Hub API**: User and post data
- **Base MiniKit**: Wallet transactions
- **OnchainKit**: Base network interactions

## Design System

- **Colors**: Dark theme with accent colors
- **Typography**: Inter font with clear hierarchy
- **Spacing**: Consistent 8px grid system
- **Animation**: Smooth transitions with cubic-bezier easing

## Deployment

Built for deployment on Base-compatible hosting with proper manifest configuration for Farcaster discovery.

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with proper TypeScript types
4. Test in Base App environment
5. Submit pull request

## License

MIT License - see LICENSE file for details.
