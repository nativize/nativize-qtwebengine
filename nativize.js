export const check = async () => {
	// check if cmake is installed
	// check if qt is installed
	//   we may need to get qt path...
	//   if environment vars set
	// check if qt webengine is installed
};

export const prepare = async () => {
};

export const build = async () => {
	// cmake -B build -S .
	await new Deno.Command("cmake", {
		args: ["-B", "build", "-S", "."],
		cwd: import.meta.dirname,
	}).spawn().status;

	// cmake --build build
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
	// clean up perhaps just delete build directory
	await Deno.remove("build", { recursive: true });
};