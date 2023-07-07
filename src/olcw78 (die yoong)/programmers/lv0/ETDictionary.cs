// https://school.programmers.co.kr/learn/courses/30/lessons/120869
namespace Programmers_LV0;

public class ETDictionary {
	public int Solution(string[] spell, string[] dic) {
		int expect = spell.Length;
		if (dic
			.Select((word) =>
				spell.Count((ch) =>
					word.Contains(ch)
				)
			)
			.Any((match) => expect == match)) {
			return 1;
		}

		return 2;
	}

}
