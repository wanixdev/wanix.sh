<>
<section id="video-container">
<iframe width="900" height="500" style="border:0px solid;" src="https://www.youtube.com/embed/kGBeT8lwbo0"></iframe>
</section>

<section>
<h2 class="lined">Features</h2>
<div id="features">
    <div class="features-section">
        <div>
            <div class="plus-bullet">+</div>
            <p>Capability-oriented microkernel architecture ("everything is a file")</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Abstract POSIX process model for generalized compute execution</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Per-process namespaces for security, isolation, and custom environments</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Built-in emulator for x86 support, Linux compatibility, and Docker-like functionality</p>
        </div>
    </div>
    <div class="features-section">
        <div>
            <div class="plus-bullet">+</div>
            <p>Runs in the browser as well as natively on Mac, Windows, and Linux</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Web: File interfaces for OPFS, DOM, web workers, and service workers</p>
        </div>
        <div>
            <div class="plus-bullet">+</div>
            <p>Web: Runs WASI WebAssembly and x86 executables</p>
        </div>
        <div>
            {/* <div class="plus-bullet">+</div>
            <p>GitHub filesystem for directly manipulating repository branches</p> */}
        </div>
    </div>
</div>
</section>

<section>
<h2 class="lined">Quick Start</h2>

<h3>Try Now</h3>
<p>Play with the stock Wanix distro at <a href="https://wanix.run">wanix.run</a></p>

<h3>Install Toolchain</h3>
<p>The Wanix CLI is available for download from the <a href="https://github.com/tractordev/wanix/releases/latest">latest release</a>:</p>

<pre>{`bash -c "$(curl -sSL https://raw.githubusercontent.com/tractordev/wanix/main/install.sh)"`}</pre>

On Mac, you can install using <a href="https://brew.sh/">Homebrew</a>:

<pre>
{`brew tap progrium/homebrew-taps
brew install wanix`}
</pre>


<h3>Toolchain Usage</h3>
<p>The <code>wanix</code> command has a number of subcommands in development, but the primary
command is <code>wanix serve</code>, which will serve Wanix at <code>http://localhost:7654</code>.</p>

<p>There is a <code>--listen</code> flag to change the port and optionally the address to listen
on. This will serve on port 6543: <code>wanix serve --listen :6543</code></p>


<h3>Using the Wanix Environment</h3>

<h4>Add Files</h4>

<p>You can easily add files to the Wanix environment by dragging files onto the
terminal. This will put them in <code>/web/opfs</code>.</p>

<p>In Chrome, you can also use the <code>pickerfs</code> capability to mount a full directory
in Wanix for the duration of your session. Run <code>id=$(capctl new pickerfs mount)</code>
to bring up a directory picker. The resulting <code>id</code> can be used to get to the
mount: <code>cd /cap/$id/mount</code>.</p>

<p>Lastly, you can mount a tar or gzipped tar from a URL with the <code>tarfs</code>
capability using the same process as <code>pickerfs</code> but with
<code>capctl new tarfs mount &lt;url&gt;</code>.</p>

<h4>Run WASI</h4>

<p>WASI Wasm executables can simply be run like running a normal executable once
added to the environment. Tested languages that can compile to Wasm
and run in Wanix include Golang, Rust, and Zig.</p>

<h4>Load Page in Window</h4>

<p>Files in the root namespace can be accessed via subpaths on the domain with the
prefix <code>/: </code>, so accessing <code>/web/opfs/file.html</code> would work using
<code>/:/web/opfs/file.html</code>. This works for any HTML elements or JS functions that
take a URL, including fetch and iframes.</p>

<p>We use iframes as windows (by styling and JS), which can be created with:</p>

<pre><code>{`id=$(domctl new iframe)
domctl body append-child $id`}</code></pre>

<p>Then you can load a URL in the iframe by setting its <code>src</code> attribute:</p>

<pre><code>{`echo src=/:/web/opfs/file.html >> /web/dom/$id/attrs`}</code></pre>

<p>You can "close" a window by removing the iframe:</p>

<pre><code>{`domctl $id remove`}</code></pre>

<h4>Run JS in a Web Worker</h4>

<p>If you have a JavaScript source file you want to run in a Web Worker, you can
use <code>workerctl start &lt;file&gt;</code>, which returns a resource ID you can use under
<code>/web/worker</code>.</p>

<p>You can terminate the worker with <code>workerctl &lt;id&gt; terminate</code>.</p>

<h4>Manipulate DOM</h4>

<p>You can currently create DOM elements using <code>domctl</code>. Run <code>domctl new</code> to see
available element types. For example, you can allocate a div element and get a
resource ID for it with <code>domctl new div</code>. DOM resources are under <code>/web/dom</code>,
including a named resource for the <code>body</code>.</p>

<p>You can also append CSS styles to the page by appending to <code>/web/dom/style</code>:</p>

<pre><code>{`echo "html { border: 8px solid lightgreen; }" >> /web/dom/style`}</code></pre>

</section>

<section id="newsletter">
<h2 class="lined">Stay in touch</h2>
<p>Subscribe to our sponsor mailing list for updates and more.</p>
<a href="https://github.com/sponsors/progrium" target="_blank">
    <button>Join sponsors</button>
</a>
</section>
</>
