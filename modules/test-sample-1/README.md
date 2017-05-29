
Follow the instructions to setup the environment on https://github.com/solso/browser-core

Then, once everything is installed setup the automatic build,

    $PATH/browser-core$ ./fern.js serve ./configs/amo-test-sample-1.json 

That will compile and watch for changes, will update $PATH/browser-core/build

Now you must "fool" Firefox to load the extension from disk,

Find you profile directory, let's say $PROFILE_DIR (you can find it at
(about:profiles)

    echo $PATH/browser-core/build/cliqz@cliqz.com >
$PROFILE_DIR/extensions/cliqz@cliqz.com

Restart Firefox, and it should prompt whether you want to install the
extension or not. Say yes.

Not all Firefoxes allow this, only: 1) Nighly, 2) Developer or 3) ESR
versions (I recommend the last one, see link
https://www.mozilla.org/en-US/firefox/organizations/all/)

You will also need to fiddle with about:config

    xpi.signatures.required set to false
    devtools.chrome.enabled set to true

create a new boolean entry

    extension.cliqz.showConsoleLogs, set to true


Restart Firefox, you should see the Q icon next to the address bar.
Also, if you go to the Browser Console (Cmd+Shift+J) you should see the
logging messages on 'test-sample. 

You can access the object at...

    CliqzUtils.ts1


Happy hacking...




