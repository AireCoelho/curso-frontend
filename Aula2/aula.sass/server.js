var bs = require("browser-sync").create();
const exec = require("child_process").exec
bs.watch("./**/*.html").on("change", bs.reload);
bs.watch("./build/**/*.css", function (event, file) {
    if (event === "change") {
        bs.reload("*.css");
    }
});
bs.watch("./src/**/*.scss", function (event, file) {
    if (event === "change") {
        console.log('change scss');
        exec('npm run build-css').unref()
    }
});

// Now init the Browsersync server
bs.init({
    server: {
    baseDir: ".",
    serveStaticOptions: {
        extensions: ["html"]
    }
}
},()=>{
    console.log('browser sync inited');

});