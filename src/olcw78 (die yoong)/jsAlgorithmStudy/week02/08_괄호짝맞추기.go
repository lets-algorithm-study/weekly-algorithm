package week02

import "fmt"

func solution08(str string) bool {
	cnt := 0
	for _, c := range str {
		if c == '(' {
			cnt++
			continue
		}

		cnt--
		if cnt < 0 {
			return false
		}
	}

	return cnt == 0
}

func Run08() {
	r1 := solution08("(())()")
	fmt.Println(r1)

	r2 := solution08("()()")
	fmt.Println(r2)

	r3 := solution08("()()()")
	fmt.Println(r3)

	r4 := solution08("(((()")
	fmt.Println(r4)
}
