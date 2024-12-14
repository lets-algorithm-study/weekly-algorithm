package week03

import (
	"fmt"
	"strconv"
	"strings"
)

func solution(n int, k int, cmd []string) string {
	table := make([]bool, n)
	for i := 0; i < n; i++ {
		table[i] = true
	}
	cur := k
	last := n - 1
	history := make([]int, 0)

	for _, c := range cmd {
		if c[0] == 'U' {
			if cint, err := strconv.Atoi(strings.Split(c, " ")[1]); err == nil {
				cur = up(cint, cur, table)
			}
			continue
		}

		if c[0] == 'D' {
			if cint, err := strconv.Atoi(strings.Split(c, " ")[1]); err == nil {
				cur = down(cint, cur, table)
			}
			continue
		}

		if c == "C" {
			table[cur] = false
			history = append(history, cur)

			if cur == last {
				last--
				cur = up(1, cur, table)
			} else {
				cur = down(1, cur, table)
			}
			continue
		}

		if c == "Z" {
			restored := history[len(history)-1]
			table[restored] = true
			history = history[:len(history)-1]
			if cur == last+1 {
				last++
			}
		}
	}

	res := make([]string, 0, len(table))
	for _, x := range table {
		nextChar := ""
		if x {
			nextChar = "O"
		} else {
			nextChar = "X"
		}
		res = append(res, nextChar)
	}

	return strings.Join(res, "")
}

func up(cnt int, cur int, table []bool) int {
	for cnt > 0 {
		cur--
		if table[cur] {
			cnt--
		}
	}
	return cur
}

func down(cnt int, cur int, table []bool) int {
	for cnt > 0 {
		cur++
		if table[cur] {
			cnt--
		}
	}
	return cur
}

func Run14() {
	r1 := solution(8, 2, []string{"D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"})
	fmt.Println(r1)

	r2 := solution(8, 2, []string{"D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"})
	fmt.Println(r2)

	r3 := solution(8, 7, []string{"C"})
	fmt.Println(r3)
}
