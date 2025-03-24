using Robocode.TankRoyale.BotApi;
using Robocode.TankRoyale.BotApi.Events;
using System;

public class SimpleMan : Bot
{
    bool foundEnemy;
    double enemyX, enemyY;
    double enemyDir;
    double enemySpeed;

    static void Main()
    {
        new SimpleMan().Start();
    }

    public SimpleMan() : base(BotInfo.FromFile("SimpleMan.json")) { }

    public override void Run()
    {
        Construct();
        while (IsRunning)
        {
            if (foundEnemy)
            {
                FollowEnemy();
                foundEnemy = false;
                SetFire(1);
            }
            else
            {
                SetTurnLeft(2);
            }

            Go();
        }
    }

    private void Construct()
    {
        foundEnemy = false;
    }

    private void FollowEnemy()
    {
        double newEnemyX = enemyX + Math.Cos(enemyDir);
        double newEnemyY = enemyY + Math.Cos(enemyDir);
        SetTurnLeft(BearingTo(newEnemyX, newEnemyY));
        if (DistanceTo(enemyX, enemyY) >= 125)
        {
            SetForward(10);
        }
        else
        {
            SetBack(10);
        }
    }

    public override void OnScannedBot(ScannedBotEvent e)
    {
        foundEnemy = true;
        enemyX = e.X;
        enemyY = e.Y;
        enemyDir = e.Direction;
        enemySpeed = e.Speed;
    }

}
