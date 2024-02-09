#include <cmath>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> c) {
  const int first = c[0];
  const int second = c[1];
  const int third = c[2];

  const bool is_deungcha = second - first == third - second;
  bool is_deungbi = false;
  int gongbi = 0;

  if (first == 0) {
    is_deungbi = round(third / second) == round(c[3] / third);
  } else {
    is_deungbi = round(second / first) == round(third / second);
  }

  gongbi = round(second / first);

  const int last = c[c.size() - 1];
  if (is_deungcha) {
    const int goncha = second - first;
    return last + goncha;
  } else if (is_deungbi) {
    return last * gongbi;
  }
}