#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct sort_set {
  int num;
  int dist;

  sort_set(int num, int dist) : num(num), dist(dist) {}

  bool operator<(const sort_set &set) const {
    if (dist == set.dist) {
      return num > set.num;
    }
      
    return dist < set.dist;
  }
};

int abs(int n) { return n < 0 ? -n : n; }

vector<int> solution(vector<int> numlist, int n) {
  vector<sort_set> sortlist;
  sortlist.reserve(numlist.size());

  const size_t numlist_len = numlist.size();
  const size_t sortlist_len = sortlist.size();

  for_each(numlist.begin(), numlist.end(), [&sortlist, n](const int i) {
    sortlist.push_back(sort_set(i, abs(n - i)));
  });

  sort(sortlist.begin(), sortlist.end());

  vector<int> answer;
  answer.reserve(sortlist_len);

  for_each(sortlist.begin(), sortlist.end(),
           [&answer](const sort_set &set) { answer.push_back(set.num); });

  return answer;
}