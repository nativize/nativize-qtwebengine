export const check = async () => {
	// check if cmake is installed
	// check if qt is installed
	//   we may need to get qt path...
	//   if environment vars set
	// check if qt webengine is installed
	// check if windeployqt is found
};

export const prepare = async () => {
};

/**
 * @param {*} url
 */
export const build = async ({ url }) => {
	// cmake -B build -S .
	await new Deno.Command("cmake", {
		//we may need to pass -DCMAKE_PREFIX_PATH=...
		//and this may allow crosscompile
		args: ["-B", "build", "-S", ".", "-DNATIVIZE_URL=" + url],
		cwd: import.meta.dirname,
	}).spawn().status;

	await new Deno.Command("cmake", {
		args: ["--build", "build"],
		cwd: import.meta.dirname,
	}).spawn().status;
};

export const run = async () => {
	// run the app
	// cmake does not have feature to run target
	// we may either implement on CMakeLists.txt or
	// here.
};

export const clean = async () => {
	//if `build` directory exists, remove it
	if (await Deno.stat("build").catch(() => null)) {
		await Deno.remove("build", { recursive: true });
	}
};
