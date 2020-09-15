import { FullscreenTwoTone } from "@material-ui/icons";

class LocalizationDelegate {
    constructor(path){
        this.path = path;
        this.langs = [];
    }
}

const LangDelegate = new LocalizationDelegate('../langs/');

export default LangDelegate;