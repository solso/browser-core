import utils from '../core/utils';
import md5 from "../core/helpers/md5";
import ResourceLoader from '../core/resource-loader';
import { queryActiveTabs } from '../core/tabs';
import { forEachWindow } from '../core/browser';
import random from '../core/crypto/random';

Components.utils.import("resource://gre/modules/FileUtils.jsm");

const dnsService = Components.classes["@mozilla.org/network/dns-service;1"]
  .createInstance(Components.interfaces.nsIDNSService);

var nsIAO = Components.interfaces.nsIHttpActivityObserver;
var nsIHttpChannel = Components.interfaces.nsIHttpChannel;

function _log(msg){
    utils.log(msg, TestSample1.LOG_KEY);
}

var TestSample1 = {
    VERSION: '0.1',
    WAIT_TIME: 2000,
    LOG_KEY: 'test-sample-1',
    debug: true,
    pacemakerId: null,
    numTicks: 0,
    listener: {
      tmpURL: undefined,
        QueryInterface: XPCOMUtils.generateQI(["nsIWebProgressListener", "nsISupportsWeakReference"]),
        onLocationChange: function(aProgress, aRequest, aURI) {
          _log('page loaded ' + aURI);
        },
        onStateChange: function(aWebProgress, aRequest, aFlag, aStatus) {

        }
    },
    pacemaker: function() {
      TestSample1.numTicks += 1;
      _log('active for ' + TestSample1.numTicks + ' ticks');
    },
    init: function(window) {
        if(utils.getPref("dnt", false)) return;
        _log("test-sample-1 loaded");

        utils.ts1 = this;

        if (TestSample1.pacemakerId==null) {
            TestSample1.pacemakerId = utils.setInterval(TestSample1.pacemaker, 1000, null);
        }

    },
    pacemaker: function() {
      TestSample1.numTicks += 1;
      _log('active for ' + TestSample1.numTicks + ' ticks');
    },
    initAtBrowser: function() {

    },
    unload: function() {
      utils.clearTimeout(TestSample1.pacemakerId);
    },
    unloadAtBrowser: function(){

    }
    /*

      check on human-web.es for examples on how to access data from a URL (either external or a chrome:// URL)
      utils.httpGet

      to send data, do not use HumanWeb/Human Web proxy network yet, create yourself a wrapper fuction here

      sendTelemetry() that does a POST request to your localhost API. Outgoing messages ought to be JSON. 

    */
}

export default TestSample1;




