/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_GAMES_API_KEY: string;
	readonly VITE_GAMES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}