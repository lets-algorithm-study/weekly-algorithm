package week02

import (
	"fmt"
	"strings"
)

func solution10(s string) int {
	if len(s) == 0 {
		return 0
	}

	str := strings.Split(s, "")
	rotCnt, answer := 0, 0

	for rotCnt < len(s) {
		joinedStr := strings.Join(str, "")
		if isCorrect(joinedStr) {
			answer++
		}

		first := str[0]
		str = append(str[1:], first)
		rotCnt++
	}

	return answer
}

func isCorrect(str string) bool {
	stack := make([]int32, 0, len(str)/2)
	isLastAndCurrentMatch := func(last, ch int32) bool {
		ok1 := ch == ']' && last == '['
		ok2 := ch == '}' && last == '{'
		ok3 := ch == ')' && last == '('
		return ok1 || ok2 || ok3
	}

	for _, ch := range str {
		if ch == '(' || ch == '{' || ch == '[' {
			stack = append(stack, ch)
		} else if ch == ')' || ch == '}' || ch == ']' {
			if len(stack) == 0 {
				return false
			}

			last := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if ok := isLastAndCurrentMatch(last, ch); !ok {
				return false
			}
		}
	}
	return 0 == len(stack)
}

func Run10() {
	r1 := solution10("(){}[]")
	fmt.Println(r1)

	r2 := solution10("}]()[{")
	fmt.Println(r2)

	r3 := solution10("[)(]")
	fmt.Println(r3)

	r4 := solution10("}}}")
	fmt.Println(r4)

	r5 := solution10("()}}")
	fmt.Println(r5)

	r6 := solution10("({)}")
	fmt.Println(r6)
}
