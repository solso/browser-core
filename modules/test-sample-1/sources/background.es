import utils from "../core/utils";
import background from "../core/base/background";
import TestSample1 from "./test-sample-1";

/**
* @namespace test-sample-1
* @class Background
*/
export default background({
  
  enabled(settings) {
    return true;
  },

  /**
  * @method init
  */
  init(settings) {
    let FF48_OR_ABOVE = false;
    try {
      const appInfo = Components.classes['@mozilla.org/xre/app-info;1']
        .getService(Components.interfaces.nsIXULAppInfo);
      const versionChecker = Components.classes['@mozilla.org/xpcom/version-comparator;1']
        .getService(Components.interfaces.nsIVersionComparator);
      if (versionChecker.compare(appInfo.version, '48.0') >= 0) {
        FF48_OR_ABOVE = true;
      }
    } catch (e) { utils.log(e); }

    if (FF48_OR_ABOVE) {
      TestSample1.initAtBrowser();
    } else {
      this.enabled = false;
    }
  },

  unload() {
    if (this.enabled) {
      TestSample1.unloadAtBrowser();
      TestSample1.unload();
    }
  },
  beforeBrowserShutdown() {
    if (this.enabled) {
      TestSample1.unload();
    }
  },
})
