using System;
using System.Drawing;
using System.Drawing.Text;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using Robocode.TankRoyale.BotApi;
using Robocode.TankRoyale.BotApi.Events;

public class Bot2 : Bot
{
    bool lockedIn = false;
    int turnDirection = 1;

    bool peek;
    double moveAmount;
    bool backToNormal = false;
    static void Main(string[] args)
    {
        new Bot2().Start();
    }

    Bot2() : base(BotInfo.FromFile("Bot2.json")) { }

    public override void Run()
    {
        BodyColor = Color.FromArgb(0x99, 0x99, 0x99);   // lighter gray
        TurretColor = Color.FromArgb(0xFF, 0x14, 0x93);   // Deep Pink  
        RadarColor = Color.FromArgb(0x66, 0x66, 0x66);  // dark gray
        lockedIn = false;

        moveAmount = Math.Max(ArenaWidth, ArenaHeight);
        peek = false;

        TurnRight(Direction % 90);
        Forward(moveAmount);

        peek = true;
        TurnGunRight(90);
        TurnRight(90);

        while (IsRunning)
        {
            if (EnemyCount < 3) lockedIn = true;

            if (lockedIn) {
                if (!backToNormal)
                    TurnGunToFront();
                TurnLeft(5 * turnDirection);
            }
            else
            {
                peek = true;
                Forward(moveAmount);
                peek = false;
                TurnRight(90);
            }
        }
    }

    public override void OnScannedBot(ScannedBotEvent e)
    {
        if (!lockedIn) {
            SetFire(2);
            if (peek)
                Rescan();
            return;
        }
        TurnToFaceTarget(e.X, e.Y);
        var distance = DistanceTo(e.X, e.Y);
        Forward(distance + 5);

        Rescan();
    }

    public override void OnHitBot(HitBotEvent e)
    {
        if (!lockedIn) {
            var bearing = BearingTo(e.X, e.Y);
            if (bearing > -90 && bearing < 90) Back(100);
            else Forward(100);
            return;
        }
        TurnToFaceTarget(e.X, e.Y);

        if (e.Energy > 16)
            Fire(3);
        else if (e.Energy > 10)
            Fire(2);
        else if (e.Energy > 4)
            Fire(1);
        else if (e.Energy > 2)
            Fire(.5);
        else if (e.Energy > .4)
            Fire(.1);

        Forward(40);
    }

    private void TurnToFaceTarget(double x, double y)
    {
        var bearing = BearingTo(x, y);
        if (bearing >= 0)
            turnDirection = 1;
        else
            turnDirection = -1;

        TurnLeft(bearing);
    }

    private void TurnGunToFront()
    {
        TurnGunLeft(90);
        backToNormal = true;
    }
}
public class TurnCompleteCondition : Condition
{
    private readonly Bot bot;

    public TurnCompleteCondition(Bot bot)
    {
        this.bot = bot;
    }

    public override bool Test()
    {
        return bot.TurnRemaining == 0;
    }
}