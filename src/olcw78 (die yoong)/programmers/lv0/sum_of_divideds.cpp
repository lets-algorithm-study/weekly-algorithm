#include <string>
#include <vector>

using namespace std;

vector<int> solution(int number1, int denom1, int number2, int denom2) {
    int n = (number1 * denom2) + (number2 * denom1);
    int d = denom1 * denom2;
    int cnt = 2;

    while (cnt <= n && cnt <= d) {
        if ((n % cnt != 0) || (d % cnt != 0)) {
            ++cnt;
            continue;
        }

        n /= cnt;
        d /= cnt;
    }

    return {n, d};
}