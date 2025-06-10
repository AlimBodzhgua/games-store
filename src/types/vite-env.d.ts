/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_GAMES_API_KEY: string;
	readonly VITE_GAMES_URL: string;

	readonly VITE_STEAM_LINK: string;
	readonly VITE_XBOX_LINK: string;
	readonly VITE_GOOGLE_LINK: string;
	readonly VITE_PLAYSTATION_LINK: string;
	readonly VITE_EPICGAMES_LINK: string;
	readonly VITE_GOG_LINK: string;
	readonly VITE_NINTENDO_LINK: string;
	readonly VITE_APPSTORE_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}