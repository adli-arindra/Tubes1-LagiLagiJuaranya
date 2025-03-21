using System;
using System.Drawing;
using System.Drawing.Text;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using Robocode.TankRoyale.BotApi;
using Robocode.TankRoyale.BotApi.Events;

public class Bot1 : Bot
{
    int turnDirection = 1;
    bool lockedIn = false;
    static void Main(string[] args)
    {
        new Bot1().Start();
    }

    Bot1() : base(BotInfo.FromFile("Bot1.json")) { }

    public override void Run()
    {
        BodyColor = Color.FromArgb(0xFF, 0x14, 0x93);   // Deep Pink  
        TurretColor = Color.FromArgb(0xFF, 0xFF, 0x00); // Yellow (Gun)  
        RadarColor = Color.FromArgb(0xFF, 0x69, 0xB4);  // Hot Pink  
        BulletColor = Color.FromArgb(0xFF, 0xC0, 0xCB); // Light Pink  
        ScanColor = Color.FromArgb(0xFF, 0x77, 0x88);   // Pinkish Rose  
        lockedIn = false;

        while (IsRunning)
        {
            if (EnemyCount < 4) lockedIn = true;

            if (lockedIn) {
                TurnLeft(5 * turnDirection);
            }
            else
            {
                SetTurnLeft(10_000);
                MaxSpeed = 5;
                Forward(10_000);
            }
        }
    }

    public override void OnScannedBot(ScannedBotEvent e)
    {
        if (!lockedIn) {
            Fire(3);
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
            if (bearing > -10 && bearing < 10)
            {
                Fire(3);
            }
            if (e.IsRammed)
            {
                TurnLeft(10);
            }
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