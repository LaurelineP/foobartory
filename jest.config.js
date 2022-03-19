
const {defaults} = require('jest-config');
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
	verbose				: true,
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	roots				: ["<rootDir>/src"],
	testEnvironment		: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"^.+\\.(css|less|scss)$": "jest-scss-transform"
	},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less|scss)$": "identity-obj-proxy"
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};

module.exports = config;