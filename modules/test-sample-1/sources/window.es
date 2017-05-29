import { utils } from "core/cliqz";
import TestSample1 from "test-sample-1/test-sample-1";

export default class {
  constructor(settings) {
    this.window = settings.window;
    this.settings = settings.settings;
  }

  enabled() {
    utils.log('HREEEEEEEE');
    return !utils.getPref("dnt", false) && !utils.isPrivate(this.window);
  }

  init() {
    if (!this.enabled()) {
      return;
    }

    TestSample1.init(this.window);
    this.window.gBrowser.addProgressListener(TestSample1.listener);
  }

  unload() {
    if (!this.enabled()) {
      return;
    }

    this.window.gBrowser.removeProgressListener(TestSample1.listener);

  }

  status() {
  }

}
