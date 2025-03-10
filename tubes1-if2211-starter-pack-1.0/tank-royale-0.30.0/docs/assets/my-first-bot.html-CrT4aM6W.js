import{_ as r,r as i,c as l,d as e,a as t,e as a,w as n,b as s,o as p}from"./app-BnzZWnG3.js";const c={},d=s('<h1 id="my-first-bot-tutorial" tabindex="-1"><a class="header-anchor" href="#my-first-bot-tutorial"><span>My First Bot tutorial</span></a></h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>This tutorial provides an introduction to creating your first bot for Robocode Tank Royale.</p><p>You might also have a look at the provided <a href="../articles/installation#sample-bots" title="Sample bots">sample bots</a> for Robocode for inspiration. You might also use the sample bots to provide a starting template containing all the necessary files to create a bot for a specific programming language and platform.</p>',4),u=e("h2",{id:"initial-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#initial-setup"},[e("span",null,"Initial setup")])],-1),h=e("p",null,[t("The first part of this tutorial is about the initial setup which is common for all bots that must be "),e("em",null,"booted"),t(" by the game regardless of which programming language is used when developing the bot.")],-1),m=e("em",null,"bot directories",-1),f=e("em",null,"root directories",-1),b=s('<h2 id="prepare-a-root-directory" tabindex="-1"><a class="header-anchor" href="#prepare-a-root-directory"><span>Prepare a root directory</span></a></h2><p>Robocode needs to locate your bot, which must be stored into its own <em>bot directory</em> under a <em>root directory</em>. The purpose of the root directory is to contain one to many bot directories.</p><p>So the first step is to prepare a root directory which we name <em>bots</em>. Under Windows, you might create this folder under <code>C:\\bots</code> or <code>%userprofile%\\bots</code>, and for macOS or Linux you might create a folder under <code>~/bots</code>.</p><p>If you use the UI for Robocode, you will need to add this root directory in the Bot Root Configuration so Robocode will be able to locate your bot(s).</p><h2 id="prepare-a-bot-directory" tabindex="-1"><a class="header-anchor" href="#prepare-a-bot-directory"><span>Prepare a bot directory</span></a></h2>',5),g=e("em",null,"bots",-1),y=e("em",null,"MyFirstBot",-1),k=e("code",null,"../bots/MyFirstBot",-1),v=s(`<h2 id="create-a-json-file-for-bot-info" tabindex="-1"><a class="header-anchor" href="#create-a-json-file-for-bot-info"><span>Create a JSON file for bot info</span></a></h2><p>A <a href="https://fileinfo.com/extension/json" target="_blank" rel="noopener noreferrer">JSON</a> file is used for providing the game with information about your bot. You must create a MyFirstBot.json file and put this into your bot directory, i.e. into <code>../bots/MyFirstBot/MyFirstBot.json</code>.</p><p>This is the content of the JSON file, which you can copy and paste into the file:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My First Bot&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;«enter your name»&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My first bot&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;«insert link to a home page for your bot»&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;countryCodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;«enter your country code, e.g. us»&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;«enter programming platform, e.g. Java or .Net»&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;programmingLang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;«enter programming language, e.g. Java or C#»&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The fields <code>name</code>, <code>version</code> and <code>authors</code> are required, and the rest of the fields are optional.</p><p>Note that the <code>authors</code> field should contain your full name, nickname, or handle, which identifies you. The <code>platform</code> and <code>programmingLang</code> depends on your choice of programming language and platform. For example, the platform could be Java 17, and the programming Language Kotlin 1.8.20 or Java 17. Or the platform could be .Net 6.0, and the programming language C# 10.0 or F# 6.0.</p><p>This concludes the common part of the tutorial, and the following depends on the platform of your choice.</p><h2 id="select-platform" tabindex="-1"><a class="header-anchor" href="#select-platform"><span>Select platform</span></a></h2><p>The rest of the tutorial is split up based on the available APIs for different platforms:</p>`,9);function _(q,w){const o=i("RouteLink");return p(),l("div",null,[d,e("p",null,[t("Note that this tutorial is aimed towards the official "),a(o,{to:"/api/apis.html"},{default:n(()=>[t("APIs")]),_:1}),t(" available for Robocode Tank Royale provided on this site.")]),u,h,e("p",null,[t("I recommend that you read about the "),a(o,{to:"/articles/booter.html"},{default:n(()=>[t("booter")]),_:1}),t(" first before continuing on this tutorial as the following assumes you are somewhat familiar with the file name conventions, and the concept of "),m,t(", and "),f,t(".")]),b,e("p",null,[t("Next, you should create a bot directory inside the "),g,t(" directory for your first bot, which we name "),y,t(", so it will be located under "),k,t(". All your bot files must be put into this folder and share the same file name as the bot directory (more info in the "),a(o,{to:"/articles/booter.html"},{default:n(()=>[t("booter")]),_:1}),t(" article).")]),v,e("ul",null,[e("li",null,[a(o,{to:"/tutorial/dotnet/my-first-bot-for-dotnet.html"},{default:n(()=>[t(".Net")]),_:1})]),e("li",null,[a(o,{to:"/tutorial/jvm/my-first-bot-for-jvm.html"},{default:n(()=>[t("Java / JVM")]),_:1})])])])}const N=r(c,[["render",_],["__file","my-first-bot.html.vue"]]),j=JSON.parse('{"path":"/tutorial/my-first-bot.html","title":"My First Bot tutorial","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Initial setup","slug":"initial-setup","link":"#initial-setup","children":[]},{"level":2,"title":"Prepare a root directory","slug":"prepare-a-root-directory","link":"#prepare-a-root-directory","children":[]},{"level":2,"title":"Prepare a bot directory","slug":"prepare-a-bot-directory","link":"#prepare-a-bot-directory","children":[]},{"level":2,"title":"Create a JSON file for bot info","slug":"create-a-json-file-for-bot-info","link":"#create-a-json-file-for-bot-info","children":[]},{"level":2,"title":"Select platform","slug":"select-platform","link":"#select-platform","children":[]}],"git":{"updatedTime":1720907942000},"filePathRelative":"tutorial/my-first-bot.md"}');export{N as comp,j as data};
