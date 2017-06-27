using System;

public class InstanceCountService
{
    public static int Counter;

    public InstanceCountService()
    {
        Counter++;
        Console.WriteLine("=====> Current Instance Count: " + Counter);
    }
}