# Finsoo

Finsoo is a free, open-source platform that allows users to create custom stickers instantly using AI technology. Perfect for WhatsApp, Telegram, Discord, and other messaging platforms, Finsoo generates high-quality stickers in various artistic styles without requiring any registration or personal information.

## Features

- **Instant AI Generation**: Transform ideas into beautiful sticker designs in seconds
- **Multiple Style Options**: Choose from cartoon, anime, pixel art, watercolor, minimalist, retro, pop art, and neon styles
- **No Registration Required**: Privacy-first approach with no accounts or data storage
- **Transparent Backgrounds**: All stickers come with transparent backgrounds for perfect messaging app integration
- **Batch Creation**: Generate multiple stickers at once for themed sticker packs

## Technology Stack

- **Frontend**: Svelte
- **UI**: Tailwind CSS, Remix Icons
- **AI Integration**: Google Gemini AI (via Google GenAI API)
- **Build Tool**: Vite

## Installation and Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn or bun

### Installation Steps

1. Clone the repository:
   ```
   git clone https://github.com/pimatis/finsoo.git
   cd finsoo
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Configure your environment variables:
   - Create a `.env` file in the root directory
   - Add your Google GenAI API key:
   ```
   VITE_APP_KEY=your_google_genai_api_key
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

## 🤝 Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project under the MIT License. See the LICENSE file for details.

<div align="center" style="display: flex; align-items: center; justify-content: space-between;">
   <p style="margin-left: 25rem; margin-top: 1.2rem;">Created by <a href="https://github.com/pimatis">Pimatis Labs</a></p>
   <img src="https://www.upload.ee/image/17796243/logo.png" alt="PiContent Logo" width="30" style="opacity: 0.2; position: absolute;">
</div>
