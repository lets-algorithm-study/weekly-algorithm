// https://school.programmers.co.kr/learn/courses/30/lessons/120902
namespace Programmers.Lv0; 

public class CalculateStrings {
	public int Solution(string input) {
		string[] strings = input.Split(' ');
		int result = int.Parse(strings[0]);

		bool wasAddition = false;
		foreach (string cur in strings.Skip(1)) {
			if (int.TryParse(s: cur, result: out int parsed)) {
				result += parsed * (wasAddition ? +1 : -1);
				continue;
			}

			wasAddition = cur == "+";
		}

		return result;
	}
}
