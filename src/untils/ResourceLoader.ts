class ResourceLoader {

    public async loadPreloadResource() {
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload");
    }
}