// https://school.programmers.co.kr/learn/courses/30/lessons/120902
namespace Programmers_LV0;

public class OXQuiz {
	public string[] Solution(string[] quiz) {
		var answer = new List<string>(quiz.Length);
		bool correct = false;

		foreach (string prob in quiz) {
			string[] tokens = prob.Split(' ');
			bool wasAddition = false;

			int sum = int.Parse(tokens[0]);
			int? expect = null;
			foreach (string token in tokens.Skip(1)) {
				if (int.TryParse(s: token, result: out int parsed)) {
					if (expect != null) {
						expect = parsed;
						break;
					}

					sum += parsed * (wasAddition ? +1 : -1);
					continue;
				}

				switch (token) {
					case "+":
						wasAddition = true;
						continue;

					case "-":
						wasAddition = false;
						continue;

					case "=":
						expect = 0;
						break;
				}
			}

			answer.Add(expect.Value == sum ? "O" : "X");
		}

		return answer.ToArray();
	}
}
