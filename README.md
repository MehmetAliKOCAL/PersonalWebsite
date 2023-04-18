<p align="center">
<img src="https://i.hizliresim.com/8afr6fj.png"/>
</p>

<h2 align="center">

<summary><h2 style="display: inline-block;">PageSpeed Insights Score</h2></summary>
</h2>

<p align="center">
<img width="700px" src="/assets/readmeBanner.svg"/>
</p>

<p align="center" >
<img src="https://shields.io/badge/-WINDICSS-blue?style=for-the-badge&logo=windicss&logoColor=%23e8e8e8&logoWidth=30&labelColor=%231a1b1b&color=%232b2b2b"/> <img src="https://shields.io/badge/-VUE-blue?style=for-the-badge&logo=vuedotjs&logoColor=%23e8e8e8&logoWidth=30&labelColor=%231a1b1b&color=%232b2b2b"/> <img src="https://shields.io/badge/-NUXT-blue?style=for-the-badge&logo=nuxtdotjs&logoColor=%23e8e8e8&logoWidth=30&labelColor=%231a1b1b&color=%232b2b2b"/> <img src="https://shields.io/badge/-VERCEL-blue?style=for-the-badge&logo=vercel&logoColor=%23e8e8e8&logoWidth=30&labelColor=%231a1b1b&color=%232b2b2b"/>
</p>

### [Live Preview](https://gwyndev.com)

A multilingual personal website with a progressive web app that you can share your projects and latest activities, made with Nuxt 3 & WindiCSS. For further instructions about Nuxt, view [docs](https://nuxt.com/docs/getting-started/introduction).

# Setup

### 1. Clone the repository

```bash
git clone https://github.com/MehmetAliKOCAL/PersonalWebsite
```

### 2. Install the dependencies

```bash
# Open the folder
cd PersonalWebsite

# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

### 3. Create environment variables

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

Start the development server on http://localhost:3000

```bash
npm run dev
```

# Production

### 1. Build the application for production

```bash
npm run build
```

### 2. Locally preview production build

```bash
npm run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for deployment instructions.
