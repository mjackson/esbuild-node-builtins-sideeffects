import esbuild from "esbuild";

function build() {
  return esbuild.build({
    entryPoints: ["./input.js"],
    outfile: "output.js",
    bundle: true,
    external: ["fs"]
  });
}

build().then(
  () => {
    process.exit(0);
  },
  error => {
    console.error(error);
    process.exit(1);
  }
);
