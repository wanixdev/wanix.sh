<section id="video-container">
<iframe width="900" height="500" style="border:0px solid;" src="https://www.youtube.com/embed/cj8FvNM14T4"></iframe>
</section>

<section>
<h2 class="lined">Features</h2>
<div id="features">
    <div class="features-section">
        <div>
            <div class="plus-bullet">+</div>
            <p>Run and create command line, TUI, and web apps in the environment</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Go compiler that runs in-browser, can cross-compile to native platforms</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Pluggable filesystem API for custom filesystem behavior like FUSE/Plan9</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Unix-like shell that can be live-edited/recompiled or replaced entirely</p>
        </div>
    </div>
    <div class="features-section">
        <div>
            <div class="plus-bullet">+</div>
            <p>Built-in micro editor, similar to nano</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Supports TypeScript and JSX in web applications without extra tooling</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Authentication using <a href="https://auth0.com/">Auth0</a> for deploying as a "backend" to static site</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>GitHub filesystem for directly manipulating repository branches</p>
        </div>
    </div>
</div>
</section>

<section>
<h2 class="lined">Quick Start</h2>

<h3>Install</h3>
<p>The Wanix CLI is available for download from the <a href="https://github.com/tractordev/wanix/releases/latest">latest release</a> or you can run this installer:</p>
<pre>bash -c "$(curl -sSL https://raw.githubusercontent.com/tractordev/wanix/main/install.sh)"</pre>
<p>Alternatively you can install using <a href="https://brew.sh/">Homebrew</a>:</p>
<pre><code>brew tap progrium/homebrew-taps
brew install wanix</code></pre>

<h3>Usage</h3>
<pre><code>{`wanix [command]

Available Commands:
dev              start wanix dev server
bootfiles        write out wanix boot files
deploy           deploy Wanix static site to GitHub Pages

Flags:
-v    show version

Use "wanix [command] -help" for more information about a command.`}</code></pre>
    
<h4>wanix dev</h4>
<p>This runs a local dev server you can access in the browser. At the moment, it needs to be run in a checkout of this repository and will make it available from within the environment at <code>/sys/dev</code>.</p>

<h4>wanix bootfiles</h4>
<p>This will write out the 3 files necessary to manually set up a page to load Wanix. To boot Wanix on a page just include these lines:</p>

<pre><code>{`&lt;script src="./wanix-bootloader.js"&gt;&lt;/script&gt;
&lt;script&gt;bootWanix()&lt;/script&gt;`}</code></pre>

<h4>wanix deploy</h4>
<p>This will set up a static site on a domain you provide using GitHub Pages. It will create a repository and set everything up for you. You can optionally have it set up authentication with the `--enable-auth` flag. This will configure <a href="https://auth0.com/">Auth0</a> for you to be able to login with GitHub. When logged in, Wanix will mount the GitHub repository for the site itself at `/repo`, which you can use to modify the site from itself using Wanix.</p>

<h3>Next steps</h3>
Continue the tutorial and see what else you can do in our <a href="/docs">documentation</a>.
</section>

<section id="newsletter">
<h2 class="lined">Stay in touch</h2>
<p>Subscribe to our sponsor mailing list for updates and more.</p>
<a href="https://github.com/sponsors/progrium" target="_blank">
    <button>Join sponsors</button>
</a>
</section>
