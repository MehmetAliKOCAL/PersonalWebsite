### [Live Preview](https://gwyndev.com)

A portfolio website to introduce yourself to the web, made with Nuxt 3 & TailwindCSS. For further instructions about Nuxt, view [docs](https://nuxt.com/docs/getting-started/introduction).

# Setup

### 1. Download the repository:

```bash
git clone https://github.com/MehmetAliKOCAL/PortfolioWebsite
```

### 2. Install the dependencies:

```bash
# Open the folder
cd PortfolioWebsite

# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

### 3. Create environment variables:

To get the project up and running, you need to use environment variables. Create a .env file in the root directory of the project where app.vue is located, then add these variables inside of the file:

```bash
STEAM_WEB_API_KEY: 'YOUR_STEAM_WEB_API_KEY'
STEAM_ID: 'YOUR_steamID64(DEC)'
LASTFM_USERNAME: 'YOUR_LASTFM_USERNAME'
LASTFM_WEB_API_KEY: 'YOUR_LASTFM_WEB_API_KEY'
```

To get your Steam Web API key, visit [here](https://steamcommunity.com/dev/apikey). <br>
To find your SteamID64 (DEC), visit [here](https://www.steamidfinder.com/). <br>
To get your LastFM API key, visit [here](https://www.last.fm/api/account/create).

Now your .env file should look like this:

![a](https://i.hizliresim.com/pjcmajq.png)

# Run the Development Server

### Start the development server on http://localhost:3000

```bash
npm run dev
```

# Production

### Build the application for production:

```bash
npm run build
```

### Locally preview production build:

```bash
npm run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
