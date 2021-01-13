///////////////////////
///// question 5 /////
// 1. Fix the bug the code.
// 3. Return a piece of code where the function is called with several different values and the result is printed.

using System;
public class Program
{
	public static int calculateSum(int n)
{
		int totalSum = n;
		for(int i = 0; i < n; i++)
			totalSum += i;
		return (totalSum);
}
	
	public static void Main()
	{
		int n = 1;
		Console.WriteLine("The sum is {1}.",n,calculateSum(n));
        n = 2;
		Console.WriteLine("The sum is {1}.",n,calculateSum(n));
        n = 5;
		Console.WriteLine("The sum is {1}.",n,calculateSum(n));
		n = 10;
		Console.WriteLine("The sum is {1}.",n,calculateSum(n));
	}
}