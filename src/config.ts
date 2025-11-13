import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "hua-blog",
	subtitle: "my Site",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 310, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "長夜月 / 崩壊:スターレイル", // Credit text to be displayed
			url: "https://pin.it/2Yf3d6N6Cr", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "hackmd",
			url: "https://hackmd.io/@bOl4HSIVQGOJVVWRC9TvPA", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Guo hua",
	bio: "CSIE → Physics/EE | Robotics & Algorithm",
	links: [
		{
			name: "Instagram",
			icon: "fa6-brands:instagram", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://www.instagram.com/110232_hua?igsh=cnd3cjYzbjB0MXBh",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://s.team/p/gddg-cjcc/KNRRCWGR",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/30913aaa",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "https://mail.google.com/mail/?view=cm&fs=1&to=pimail307@gmail.com&su=來自%20hua%27s%20blog",
		},
		
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
