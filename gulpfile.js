const path = require('path');
const { task, src, dest } = require('gulp');
const {copyFile} = require('fs/promises');

task('build:icons', copyIcons);

async function copyIcons() {
	// Only the icon belongs in dist. Upstream also copied pnpm-lock.yaml here,
	// which shipped a 94kB lockfile inside the published package for no reason.
	return copyFile('nodes/Nushir/nushir.png', 'dist/nodes/Nushir/nushir.png');
}
