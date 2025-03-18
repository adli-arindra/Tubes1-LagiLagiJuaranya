using Robocode.TankRoyale.BotApi;
using Robocode.TankRoyale.BotApi.Events;

public class Bot4 : Bot
{
    static void Main(string[] args)
    {
        new Bot4().Start();
    }

    Bot4() : base(BotInfo.FromFile("Bot4.json")) { }

    public override void Run()
    {
        while (IsRunning)
        {
            Forward(100);
            TurnGunRight(360);
            Back(100);
            TurnGunRight(360);
        }
    }

    public override void OnScannedBot(ScannedBotEvent evt)
    {
        Fire(1);
    }

    public override void OnHitByBullet(HitByBulletEvent evt)
    {
        var bearing = CalcBearing(evt.Bullet.Direction);

        TurnLeft(90 - bearing);
    }
}