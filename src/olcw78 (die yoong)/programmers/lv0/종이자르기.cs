// https://school.programmers.co.kr/learn/courses/30/lessons/120922
namespace Programmers_LV0; 

public class 종이자르기 {
	public int Solution(int m, int n) {
		if (m == 1 && n == 1) 
			return 0;        
        
		int max = Math.Max(m, n);
		int min = Math.Min(m, n);
                       
		return (min - 1) + (max - 1) * min;
	}
}
