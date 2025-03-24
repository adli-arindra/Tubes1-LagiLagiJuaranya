using Robocode.TankRoyale.BotApi;
using Robocode.TankRoyale.BotApi.Events;
using System;


public class Jago1 : Bot
{
    Random rand;
    bool foundEnemy;
    double eX, eY;
    double eXn, eYn;
    double eDir;
    double eSpeed;
    double eDeltaSpeed;

    static void Main()
    {
        new Jago1().Start();
    }

    public Jago1() : base(BotInfo.FromFile("Jago1.json")) { }

    public override void Run()
    {
        AdjustGunForBodyTurn = true;
        AdjustRadarForBodyTurn = true;
        AdjustRadarForGunTurn = true;
        Construct();
        while (IsRunning)
        {
            if (foundEnemy)
            {
                Locking();
                ApproachEnemy();
                Attack();
                foundEnemy = false;
            }
            else
            {
                ClearEnemyMemory();
                Moving();
                Scanning();
            }

            Go();
        }
    }

    private void Construct()
    {
        rand = new Random();
        ClearEnemyMemory();
    }

    private void ClearEnemyMemory()
    {
        foundEnemy = false;
        eX = -1;
        eY = -1;
        eXn = -1;
        eYn = -1;
        eDir = -1;
        eSpeed = -11;
        eDeltaSpeed = 0;
    }

    private void Scanning()
    {
        if (RadarTurnRemaining == 0)
            SetTurnRadarLeft(2);
    }

    private void Locking()
    {
        SetTurnRadarLeft(RadarBearingTo(eXn, eYn));
        SetTurnGunLeft(GunBearingTo(eXn, eYn));
    }

    private void ApproachEnemy()
    {
        if (DistanceRemaining >= 0)
            SetTurnLeft(BearingTo(eXn, eYn));
        if (DistanceRemaining >= 0)
            SetForward(10000);
    }

    private void Attack()
    {
        double distanceToEnemy = DistanceTo(eXn, eYn);
        double gunBearing1 = Math.Abs(GunBearingTo(eXn, eYn));
        double gunBearing2 = Math.Abs(CalcGunBearing(eDir));

        if (distanceToEnemy <= 40)
        {
            if (Math.Abs(eSpeed) <= 3)
                Fire(3);
            else
            {
                if (gunBearing1 <= 30)
                    if (gunBearing2 <= 15 || gunBearing2 >= 165)
                        if (GunHeat == 0)
                            Fire(3);
                        else if (GunHeat == 0) Fire(1);
            }
            if (Math.Abs(CalcBearing(eDir)) >= 170 || Energy <= 20 || rand.Next(0, 101) < 30)
            {
                SetBack(100);
                if (rand.Next(0, 101) > 50)
                    SetTurnLeft(90);
                else SetTurnRight(90);
            }
        }
        else if (distanceToEnemy <= 75)
        {
            if (gunBearing1 <= 5 && (gunBearing2 <= 15 || gunBearing2 >= 165))
            {
                if (Math.Abs(eSpeed) <= 3)
                    if (GunHeat == 0)
                        Fire(1.5);
                    else if (GunHeat == 0)
                        Fire(1);
            }
        }
        else if (distanceToEnemy <= 100)
        {
            if (gunBearing1 <= 5 && (gunBearing2 <= 10 || gunBearing2 >= 170))
                if (GunHeat == 0)
                    Fire(0.1);
        }
    }

    private void Moving()
    {
        if (DistanceRemaining == 0)
        {
            double xx = rand.Next(150, 650);
            double yy = rand.Next(150, 450);
            TurnLeft(BearingTo(xx, yy));
            SetForward(DistanceTo(xx, yy));
        }
    }
    public override void OnScannedBot(ScannedBotEvent e)
    {
        foundEnemy = true;
        eX = e.X;
        eY = e.Y;
        eDir = e.Direction;
        if (eSpeed != -11)
            eDeltaSpeed = e.Speed - eSpeed;
        eSpeed = e.Speed;
        eXn = eX + Math.Cos(e.Direction * Math.PI / 180) * (eSpeed + eDeltaSpeed);
        eYn = eY + Math.Sin(e.Direction * Math.PI / 180) * (eSpeed + eDeltaSpeed);
    }

    public override void OnHitBot(HitBotEvent botHitBotEvent)
    {
        base.OnHitBot(botHitBotEvent);
        SetTurnRadarLeft(RadarBearingTo(botHitBotEvent.X, botHitBotEvent.Y));
    }
}