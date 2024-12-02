package main

import "fmt"

func solution(answers []int) []int {
	s1 := []int{1, 2, 3, 4, 5}
	s2 := []int{2, 1, 2, 3, 2, 4, 2, 5}
	s3 := []int{3, 3, 1, 1, 2, 2, 4, 4, 5, 5}

	var m1, m2, m3 int = 0, 0, 0
	for i := 0; i < len(answers); i++ {
		cur := answers[i]
		if s1[i%len(s1)] == cur {
			m1++
		}

		if s2[i%len(s2)] == cur {
			m2++
		}

		if s3[i%len(s3)] == cur {
			m3++
		}
	}

	answer := make([]int, 0, 3)
	maxScore := max(m1, m2, m3)
	if m1 == maxScore {
		answer = append(answer, 1)
	}
	if m2 == maxScore {
		answer = append(answer, 2)
	}
	if m3 == maxScore {
		answer = append(answer, 3)
	}

	return answer
}

func main() {
	r1 := solution([]int{1, 2, 3, 4, 5})
	fmt.Println(r1)

	r2 := solution([]int{1, 3, 2, 4, 2})
	fmt.Println(r2)
}
