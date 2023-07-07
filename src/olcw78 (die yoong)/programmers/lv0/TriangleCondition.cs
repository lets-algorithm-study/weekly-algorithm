// https://school.programmers.co.kr/learn/courses/30/lessons/120902 

namespace Programmers_LV0; 

public class TriangleCondition {
	public int Solution(int[] sides) {
		int _1 = sides[0];
		int _2 = sides[1];
        
		int big = Math.Max(_1, _2);
		int diff = Math.Abs(_1 - _2);              
		int c1 = big - diff;
        
		int from = big + 1;
		int to = _1 + _2;
		int c2 = Enumerable.Range(from, to - from).Count();
        
		return c1 + c2;
	}
}
}
