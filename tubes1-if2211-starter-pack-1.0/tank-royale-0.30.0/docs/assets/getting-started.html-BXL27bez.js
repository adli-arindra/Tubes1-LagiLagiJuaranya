import{_ as t}from"./robocode-battle-anim-DPDBXIIh.js";import{_ as a,a as n,b as i}from"./radar-no-sweep-_T1QAKPZ.js";import{_ as o,c as s,a as r,o as h}from"./app-BH7qM4bE.js";const l={};function d(c,e){return h(),s("div",null,e[0]||(e[0]=[r('<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1><h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics"><span>The Basics</span></a></h2><p>This tutorial introduces you to the basics of Robocoding. That is, getting a basic understanding of what Robocode is all about before getting started coding your first bot.</p><h2 id="run-some-battles-first" tabindex="-1"><a class="header-anchor" href="#run-some-battles-first"><span>Run some battles first</span></a></h2><p>The best introduction to Robocode is to see some battles between existing bots to get an idea of what Robocode is about.</p><p>This GIF animation can give you a glimpse, but not the full picture:</p><p><img src="'+t+'" alt="Robocode battle"></p><p>So if you have not seen the battles already, you should:</p><ol><li><a href="../articles/installation">install and run</a> the GUI application,</li><li><a href="../articles/installation#sample-bots">unzip the sample bots</a> to some directory on your system,</li><li><a href="../articles/installation#set-up-bot-directories">set up bot directories</a> for the sample bots, and</li><li><a href="../articles/installation#sample-bots">start a battle</a> with the sample bots.</li></ol><p>You can read more about how to use the GUI <a href="../articles/gui">here</a>.</p><h2 id="what-is-robocode-about" tabindex="-1"><a class="header-anchor" href="#what-is-robocode-about"><span>What is Robocode about?</span></a></h2><p>As written in the <a href="../articles/intro">Introduction</a>, Robocode is about creating a program for a tank. This program is run when selected and booted from the <a href="../articles/gui">GUI</a>. The goal is to keep the bot (tank) alive as long as possible and defeat all other enemy bots in a battle. The more damage you deal to enemy bots, and the better the bot is to survive enemy tanks, the better <a href="../articles/scoring">score</a> your bot will receive. The higher the score, the better.</p><h2 id="rounds-and-turns" tabindex="-1"><a class="header-anchor" href="#rounds-and-turns"><span>Rounds and Turns</span></a></h2><p>A <em>battle</em> between bots in Robocode can contain multiple <em>rounds</em>. A battle could for example contain 10 individual rounds, where each round will have its winners and losers.</p><p>Each round is divided into <em>turns</em> which are the smallest time units. A <em>turn</em> is a clock tick and game loop in Robocode. How many turns a round takes depends on how long time it takes for the last survivor(s) to last the round.</p><p>With each turn, a bot should:</p><ol><li>Move the bot, scan for enemies, and potentially fire the gun</li><li>React on events like e.g. when the bot is hit by bullets or collides with a bot or the wall.</li></ol><p>Commands for moving, turning, scanning, firing, etc. are sent to the server as an <em>intent</em> for each turn.</p><blockquote><p>Note that the official bot API sends the <em>bot intent</em> to the server behind the scenes, so you do not need to worry about this yourself, unless you are creating your own Bot API.</p></blockquote><p>With each turn, the bot automatically receives updated information about its new and current state, e.g. new position and orientation on the battlefield. The bot will also get information about enemy bots when they are detected by the scanner. More information follows about this later.</p><h3 id="turn-timeout" tabindex="-1"><a class="header-anchor" href="#turn-timeout"><span>Turn timeout</span></a></h3><p>It is important to note there is a time restriction on how much time each bot can spend each turn called <em>turn timeout</em>, which is typically 30-50 ms (can be set up as a battle rule). This means that bots cannot use as long time as it suits them to make a move and finish the current turn.</p><h3 id="skipped-turn" tabindex="-1"><a class="header-anchor" href="#skipped-turn"><span>Skipped turn</span></a></h3><p>Whenever a new turn starts, a timeout timer is reset and starts ticking. If the timeout is reached, the bot does not send its <em>intent</em> for the turn, and hence no commands are provided for the server. Hence, the bot will be <em>skipping</em> the turn. With a <em>skipped turn</em>, a bot will not be able to make adjustments to its movement, and will not be able to fire the gun, as the server did not receive the command in time before the next turn started.</p><h2 id="bots-and-teams" tabindex="-1"><a class="header-anchor" href="#bots-and-teams"><span>Bots and Teams</span></a></h2><p>Robocode supports team battles, where a team consists of multiple bots (teammates) teaming up against enemy teams or single bots. Creating a team takes a bit more effort than creating a bot, and is something you can try out later. Just keep in mind, that you can develop both individual bots, but also teams consisting of multiple different bots.</p><p>Also note that it is possible to let some of the teammates be &quot;Droids&quot;, which have <em>no scanner</em>, but more initial energy. Droids only make sense to use in teams, when they have no scanner.</p><h2 id="energy" tabindex="-1"><a class="header-anchor" href="#energy"><span>Energy</span></a></h2><p>All bots start with an initial amount of energy of typically 100 energy points. (Note that Droids start with 120 energy points).</p><ol><li>A bot <em>looses</em> energy when being <em>hit</em> by enemy bullets or <em>rammed</em> by an enemy bot. <br>(Note that no energy is lots if the bot is hit by a teammate, as friendly fire is not supported.)</li><li>A bot <em>spends</em> energy when firing its cannon. But it can only spend energy if it has enough energy to fire the bullet.</li><li>A bot <em>gains</em> energy when one of its bullets hits an enemy bot.</li><li>A bot with zero energy left, will be <em>disabled</em> and cannot move this would require energy. This makes the bot an easy target and hence should be avoided.</li></ol><p>Hence, it is crucial to avoid getting hit by enemies to keep energy and have the energy to fire the cannon against enemies. But firing the cannon must be done wisely, as energy is spent when firing the cannot, and energy is only earned when the bullet hits an enemy. Also notice that a bot gains 3x the firepower energy spent on the bullet, which hits an enemy.</p><p>Read more about how much energy is required to fire bullets and how much energy is gained by hitting enemy bots etc. in the <a href="../articles/physics">physics</a> for Robocode.</p><h2 id="bullets" tabindex="-1"><a class="header-anchor" href="#bullets"><span>Bullets</span></a></h2><h3 id="firing-bullets" tabindex="-1"><a class="header-anchor" href="#firing-bullets"><span>Firing bullets</span></a></h3><p>The bullets fired in Robocode are virtual energy bullets (not projectiles). The more energy (firepower) spent on firing the bullet from the cannon, the heavier the bullet makes it slower. But the heavier bullets also make more <a href="../articles/physics#bullet-damage">damage</a>, and hence let your bot <a href="../articles/physics#energy-gain">gain energy</a> when hitting an enemy bot.</p><p>As mentioned, the heavier the bullet, the slower it moves. Hence, it will take a longer time to reach its target, and the risk that it will not hit its target is higher. Lighter bullets move much faster making it easier to hit targets. But notice that they do not earn the bots as many energy points when they hit enemy bots. Read more about bullet speed <a href="../articles/physics#bullet-speed">here</a></p><h3 id="gun-heat" tabindex="-1"><a class="header-anchor" href="#gun-heat"><span>Gun Heat</span></a></h3><p>When bullets are fired, the cannon gets heated. Heavier bullets generated more heat than lighter bullets. When the gun is heated, it cannot fire until it has cooled down to a gun heat equal to zero. Also notice, that the gun is hot within the first rounds and needs to cool down before it can fire the first time. Read more about the gun heat <a href="../articles/physics#gun-heat">here</a>.</p><h2 id="collisions" tabindex="-1"><a class="header-anchor" href="#collisions"><span>Collisions</span></a></h2><p>Note that your bot will take damage when it hits the wall (borders), i.e. taking <a href="../articles/physics#wall-damage">wall damage</a>. The same is the case, if the bot hits another bot. If the bot hits an enemy bot by moving forward, it will be <a href="../articles/physics#ramming">ramming</a> the enemy bot, which generates a small amount of score.</p><h2 id="tank-parts" tabindex="-1"><a class="header-anchor" href="#tank-parts"><span>Tank parts</span></a></h2><p>A bot in Robocode is a tank that consists of 3 parts:</p><ol><li>Body</li><li>Turret and gun</li><li>Radar</li></ol><p><img src="'+a+'" alt="Tank anatomy"></p><p>The <em>body</em> is the main and the bottom part of the tank is used for moving the tank around on the battlefield.</p><p>The <em>turret</em> is mounted on the main body and can turn either <em>with</em> or <em>independently of</em> the body. The cannon is mounted on the turret and is used for firing bullets (obviously).</p><p>The <em>radar</em> is mounted on the top of the turret and can turn either with or independently of both the body and the turret too.</p><h2 id="movement" tabindex="-1"><a class="header-anchor" href="#movement"><span>Movement</span></a></h2><p>The bot can move forward and backward up to a <a href="../articles/physics#maximum-speed">maximum speed</a>. It takes several turns to get to reach the maximum speed. The bot can achieve a maximum acceleration of 1 unit per turn, and brake with a maximum deceleration of 2 units per turn. The maximum acceleration and deceleration do not depend on the current speed of the bot.</p><h3 id="turning" tabindex="-1"><a class="header-anchor" href="#turning"><span>Turning</span></a></h3><p>As mentioned earlier, it is possible to turn the body, turret, and radar independently of each other. If you don&#39;t turn turret or radar, these will of course point in the same direction as the body.</p><p>Each part of the body has different turning speeds. The radar is the fastest part and can turn up to 45 degrees per turn, meaning it can turn 360 degrees in 8 turns. The turret and gun can turn up to 20 degrees per turn.</p><p>The slowest part is the tank body, which in the best case can turn up to 10 degrees per turn. But notice that this depends on the current speed of the bot. The faster the bot moves, the slower the bot will be able to turn. Read more about it <a href="../articles/physics#bot-base-rotation">here</a>.</p><p>Note that no energy is spent on moving or turning the bot.</p><h3 id="scanning" tabindex="-1"><a class="header-anchor" href="#scanning"><span>Scanning</span></a></h3><p>A crucial aspect of Robocoding is to scan enemy bots with the radar of the bot. The radar can scan bots within a range of 1200 pixels. So enemies more than 1200 pixels away from the bot cannot be detected/scanned by the radar.</p><h4 id="radar-sweep-scan-arc" tabindex="-1"><a class="header-anchor" href="#radar-sweep-scan-arc"><span>Radar sweep/scan arc</span></a></h4><p>It is important to notice a bot will only be able to scan bots that are within its scan arc. The scan arc is the &quot;radar sweep&quot; from its previous radar direction to its current direction in the turn.</p><p><img src="'+n+'" alt="Radar sweep"></p><p>If the radar is not being turned in a round, meaning it is pointing in the same direction as the previous turn, then the scan arc will be zero degrees, and the bot will not be able to scan enemies.</p><p><img src="'+i+'" alt="Scan arc"></p><p>Hence, it is highly recommended to ensure the radar is always shifting its direction to keep scanning enemies.</p><h4 id="scanning-event" tabindex="-1"><a class="header-anchor" href="#scanning-event"><span>Scanning event</span></a></h4><p>Whenever and <em>only</em> when a bot scans an enemy, the bot receives a <code>ScannedBotEvent</code> with information about the enemy, e.g. its coordinates and current energy. This means that a bot never receives updated information about enemies&#39; whereabouts, when they are not being scanned by the bot.</p><p>Hence, it is important to keep the direction of radar in the direction of the enemies. This is easy, if there is only one bot on the battlefield, but much harder when there are multiple enemies to keep track of, as the radar is only able to cover a scan arc up to 45 degrees.</p><p>It is highly recommended to keep track of the latest scanned data for each enemy to get an idea of where they might be positioned and heading when the radar is not pointing towards those enemies.</p><h3 id="end-of-tutorial" tabindex="-1"><a class="header-anchor" href="#end-of-tutorial"><span>End of tutorial</span></a></h3><p>This is the end of this tutorial.</p><p>You should now have gained knowledge about the basic concepts of Robocode. Now it is time for some Robocoding. So head over to the <a href="../tutorial/my-first-bot" title="My First Bot tutorial">My First Bot</a> tutorial to get started creating your first bot.</p>',69)]))}const b=o(l,[["render",d],["__file","getting-started.html.vue"]]),g=JSON.parse('{"path":"/tutorial/getting-started.html","title":"Getting Started","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"The Basics","slug":"the-basics","link":"#the-basics","children":[]},{"level":2,"title":"Run some battles first","slug":"run-some-battles-first","link":"#run-some-battles-first","children":[]},{"level":2,"title":"What is Robocode about?","slug":"what-is-robocode-about","link":"#what-is-robocode-about","children":[]},{"level":2,"title":"Rounds and Turns","slug":"rounds-and-turns","link":"#rounds-and-turns","children":[{"level":3,"title":"Turn timeout","slug":"turn-timeout","link":"#turn-timeout","children":[]},{"level":3,"title":"Skipped turn","slug":"skipped-turn","link":"#skipped-turn","children":[]}]},{"level":2,"title":"Bots and Teams","slug":"bots-and-teams","link":"#bots-and-teams","children":[]},{"level":2,"title":"Energy","slug":"energy","link":"#energy","children":[]},{"level":2,"title":"Bullets","slug":"bullets","link":"#bullets","children":[{"level":3,"title":"Firing bullets","slug":"firing-bullets","link":"#firing-bullets","children":[]},{"level":3,"title":"Gun Heat","slug":"gun-heat","link":"#gun-heat","children":[]}]},{"level":2,"title":"Collisions","slug":"collisions","link":"#collisions","children":[]},{"level":2,"title":"Tank parts","slug":"tank-parts","link":"#tank-parts","children":[]},{"level":2,"title":"Movement","slug":"movement","link":"#movement","children":[{"level":3,"title":"Turning","slug":"turning","link":"#turning","children":[]},{"level":3,"title":"Scanning","slug":"scanning","link":"#scanning","children":[]},{"level":3,"title":"End of tutorial","slug":"end-of-tutorial","link":"#end-of-tutorial","children":[]}]}],"git":{"updatedTime":1721078292000},"filePathRelative":"tutorial/getting-started.md"}');export{b as comp,g as data};
