import{_ as a,c as o,a as n,o as t}from"./app-BtLuAYYn.js";const i={};function r(s,e){return t(),o("div",null,e[0]||(e[0]=[n(`<h1 id="installing-and-running-robocode" tabindex="-1"><a class="header-anchor" href="#installing-and-running-robocode"><span>Installing and running Robocode</span></a></h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>This guide describes how to install and run Robocode Tank Royale.</p><h2 id="java-11-or-newer" tabindex="-1"><a class="header-anchor" href="#java-11-or-newer"><span>Java 11 or newer</span></a></h2><p>Robocode is running on a Java Runtime Environment (JRE) and needs Java 11 as a minimum. If you want to develop bots for Robocode in the Java programming language, then you need a JDK (Java Development Kit).</p><blockquote><p>Note that you do not need to run version 11 of Java specifically to run the GUI, booter, server, or your Java/JVM-based bot. I encourage you to run the newest Java version. But you cannot use Java versions older than version 11.</p></blockquote><p>Numerous Java distributions are available:</p><ul><li><a href="https://www.oracle.com/java/technologies/javase/" target="_blank" rel="noopener noreferrer">Oracle JDK</a></li><li><a href="https://openjdk.java.net/" target="_blank" rel="noopener noreferrer">OpenJDK</a></li><li><a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">Adoption / Eclipse Temurin</a></li><li><a href="https://developers.redhat.com/products/openjdk" target="_blank" rel="noopener noreferrer">Red Hat</a></li><li><a href="https://www.azul.com/downloads/?package=jdk" target="_blank" rel="noopener noreferrer">Azul Zulu</a></li><li><a href="https://aws.amazon.com/corretto" target="_blank" rel="noopener noreferrer">Amazon Corretto</a></li></ul><p>If you do not have java installed already (can be checked writing the command below), you should download and install Java first. Follow the installation instructions carefully, and make sure that you are able to run <code>java</code> from the command line by writing:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">java</span> <span class="token parameter variable">-version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This is a check that Java has been installed correctly and is available. Entering <code>java -version</code> should write the version of the Java that is being used along with the vendor of the java distribution.</p><h2 id="running-the-robocode-gui" tabindex="-1"><a class="header-anchor" href="#running-the-robocode-gui"><span>Running the Robocode GUI</span></a></h2><p>Robocode has a GUI application that can be used for running and viewing battles on your local machine. You should use this application for observing how your bot(s) perform in the battle arena against other bots.</p><p>You can download the application from the <a href="https://github.com/robocode-dev/tank-royale/releases" title="Robocode releases" target="_blank" rel="noopener noreferrer">Robocode releases</a>.</p><p>You need the file named <code>robocode-tankroyale-gui-x.y.z.jar</code>, where x.y.z is the specific version number of Robocode, e.g. version 0.14.1.</p><p>You might be able to simply start the application by (double)clicking it, depending on the OS and Java version you have. If you cannot start the Robocode application by clicking it, you should start it from the command line like this. You need to stand in the directory containing the .jar file of course.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">java -jar robocode-tankroyale-gui-x.y.z.jar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>I recommend that you create a directory for Tank Royale, and create a script file for starting up the GUI using the command line above.</p><p>The GUI application will automatically create and store <code>.properties</code> files beside your <code>robocode-tankroyale-gui-x.y.z.jar</code> file when running the application.</p><h2 id="sample-bots" tabindex="-1"><a class="header-anchor" href="#sample-bots"><span>Sample bots</span></a></h2><p>Next, you&#39;ll need to provide some bots for the game in order to start up bots that can battle against each other. For this purpose, the sample bots provided for Robocode come in handy. So you could download a zip archive from the <a href="https://github.com/robocode-dev/tank-royale/releases" title="Robocode releases" target="_blank" rel="noopener noreferrer">Robocode releases</a>, e.g. sample bots for Java that will run when Java has already been installed on your system.</p><p>So download and extract the <code>sample-bots-java-x.y.z.zip</code> archive to a directory somewhere, and note the file path of the directory where all the sample bot directories are located.</p><h2 id="set-up-bot-directories" tabindex="-1"><a class="header-anchor" href="#set-up-bot-directories"><span>Set up bot directories</span></a></h2><p>Next, you should start up the Robocode application and select Config -&gt; Bot Root Directories from the menu, and then add the directory to where you installed the sample bots.</p><p>The sample bots should show up under the Bot Directories when selecting Battle -&gt; Start Battle from the menu. If not, you might have a misconfiguration with the root bot directory.</p><h2 id="installing-sound-files" tabindex="-1"><a class="header-anchor" href="#installing-sound-files"><span>Installing sound files</span></a></h2><p>Note: Installing the sound files is optional, but are provided if you want to add sounds to the game. 🙂</p><p>You download the <code>sounds.zip</code> archive from the <a href="https://github.com/robocode-dev/sounds/releases" target="_blank" rel="noopener noreferrer">sounds releases</a>, e.g. <a href="https://github.com/robocode-dev/sounds/releases/download/v1.0.0/sounds.zip" target="_blank" rel="noopener noreferrer">sounds.zip 1.0.0</a>.</p><p>Unpack the <code>sounds</code> directory from the zip archive, and copy the <code>sounds</code> directory into the directory containing your <code>robocode-tankroyale-gui-x.y.z.jar</code> file so that the <code>sounds</code> directory is located next to the jar file for the GUI like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">[your tank royale directory]</span>
<span class="line">├── robocode-tankroyale-gui-x.y.z.jar</span>
<span class="line">└── sounds/  &lt;-- this directory</span>
<span class="line">    ├── bots_collision.wav</span>
<span class="line">    ├── bullet_hit.wav</span>
<span class="line">    ...</span>
<span class="line">    └── wall_collision.wav    </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The sounds are automatically enabled, and you can enable/disable all sounds and the individual sound from the Sound Options in the GUI application.</p><h3 id="using-your-own-sound-files" tabindex="-1"><a class="header-anchor" href="#using-your-own-sound-files"><span>Using your own sound files</span></a></h3><p>If you want you replace one or more sounds, you can do this by simple overwriting the sound files with other <a href="https://en.wikipedia.org/wiki/WAV" title="WAV file" target="_blank" rel="noopener noreferrer">WAV</a> files as long as you stick to the existing file names. Also note that only <a href="https://en.wikipedia.org/wiki/WAV" title="WAV file" target="_blank" rel="noopener noreferrer">WAV</a> files are supported.</p>`,33)]))}const d=a(i,[["render",r],["__file","installation.html.vue"]]),c=JSON.parse('{"path":"/articles/installation.html","title":"Installing and running Robocode","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Java 11 or newer","slug":"java-11-or-newer","link":"#java-11-or-newer","children":[]},{"level":2,"title":"Running the Robocode GUI","slug":"running-the-robocode-gui","link":"#running-the-robocode-gui","children":[]},{"level":2,"title":"Sample bots","slug":"sample-bots","link":"#sample-bots","children":[]},{"level":2,"title":"Set up bot directories","slug":"set-up-bot-directories","link":"#set-up-bot-directories","children":[]},{"level":2,"title":"Installing sound files","slug":"installing-sound-files","link":"#installing-sound-files","children":[{"level":3,"title":"Using your own sound files","slug":"using-your-own-sound-files","link":"#using-your-own-sound-files","children":[]}]}],"git":{"updatedTime":1720907271000},"filePathRelative":"articles/installation.md"}');export{d as comp,c as data};
