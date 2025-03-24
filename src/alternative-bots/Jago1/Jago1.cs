using Robocode.TankRoyale.BotApi;
using Robocode.TankRoyale.BotApi.Events;
using System;

public class SimpleMan : Bot
{
    Random randomizer;
    bool foundEnemy;
    double enemyDeltaSpeed;
    double enemyDir;
    double enemySpeed;
    double enemyX, enemyY;
    static void Main()
    {
        new SimpleMan().Start();
    }

    public SimpleMan() : base(BotInfo.FromFile("Jago1.json")) { }

    public override void Run()
    {
        Console.WriteLine(ArenaHeight);
        Console.WriteLine(ArenaWidth);
        Console.WriteLine(X);
        Console.WriteLine(Y);
        Construct();
        while (IsRunning)
        {
            if (foundEnemy)
            {
                Destroy();
                foundEnemy = false;
            }
            else
            {
                Hunting();
                ClearEnemyMemory();
                SetTurnLeft(2);
            }

            Go();
        }
    }

    private void Construct()
    {
        randomizer = new Random();
        foundEnemy = false;
        ClearEnemyMemory();
    }

    private void ClearEnemyMemory()
    {
        enemyDeltaSpeed = 0;
        enemyDir = -1;
        enemySpeed = -11;
        enemyX = -1;
        enemyY = -1;
    }

    private void Destroy()
    {
        double newEnemyX = enemyX + Math.Cos(enemyDir * Math.PI / 180) * (enemyDeltaSpeed + enemySpeed);
        double newEnemyY = enemyY + Math.Sin(enemyDir * Math.PI / 180) * (enemyDeltaSpeed + enemySpeed);

        SetTurnLeft(BearingTo(newEnemyX, newEnemyY));
        SetForward(10);

        double enemyDir1 = enemyDir;
        double enemyDir2 = (enemyDir + 180) % 360;
        double dirDelta1 = Math.Abs(CalcBearing(enemyDir1));
        double dirDelta2 = Math.Abs(CalcBearing(enemyDir2));
        double distanceToEnemy = DistanceTo(newEnemyX, newEnemyY);

        if (dirDelta1 <= 20 || dirDelta2 <= 20)
        {
            if (distanceToEnemy <= 100 && distanceToEnemy >= 70) SetFire(3);
            else if (distanceToEnemy <= 125) SetFire(2);
            else if (distanceToEnemy <= 175) SetFire(1);
        }
        if (distanceToEnemy < 70)
        {
            if (Math.Abs(enemySpeed) < 3)
            {
                Fire(10);
            }
            else
            {
                if (dirDelta1 <= 20 || dirDelta2 <= 20)
                {
                    Fire(7.5);
                }
            }
        }
    }


    private void Hunting()
    {
        if (DistanceRemaining == 0)
            SetForward(randomizer.Next(-100, 100));
        SetTurnLeft(2);
    }

    public override void OnScannedBot(ScannedBotEvent e)
    {
        foundEnemy = true;
        enemyX = e.X;
        enemyY = e.Y;
        enemyDir = e.Direction;
        if (enemySpeed != -11)
            enemyDeltaSpeed = e.Speed - enemySpeed;
        enemySpeed = e.Speed;
    }
}

