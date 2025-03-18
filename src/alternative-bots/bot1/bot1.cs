using System;
using System.Security.Cryptography.X509Certificates;
using Robocode.TankRoyale.BotApi;
using Robocode.TankRoyale.BotApi.Events;

public class Bot1 : Bot
{
    private bool OnCorner = false;
    static void Main(string[] args)
    {
        new Bot1().Start();
    }

    Bot1() : base(BotInfo.FromFile("Bot1.json")) { }

    public override void Run()
    {
        while (IsRunning)
        {
            if (!OnCorner) GoToCorner();
            else {
                Moving();
                Scanning();
            }
        }
    }

    private void GoToCorner()
    {
        int X_target = ArenaWidth - 50;
        int Y_target = ArenaHeight - 50;

        if (Util.GetDistance(this, X_target, Y_target) < 50) {
            OnCorner = true;
            return;
        }

        double Dir = DirectionTo(X_target, Y_target);
    }

    private void Moving()
    {
        Forward(100);
        SetTurnRight(90);
    }

    private void Scanning()
    {
        SetTurnRadarRight(45);
    }

    public override void OnScannedBot(ScannedBotEvent e)
    {
        Fire(1);
    }
}

public class Util
{
    public static Double GetDistance(Bot bot, Double x, Double y)
    {
        return Math.Sqrt(Math.Pow(bot.X - x, 2) + Math.Pow(bot.Y - y, 2));
    }
}