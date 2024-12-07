package week02

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

func solution09(n int) string {
	str := make([]string, 0)
	num := float64(n)
	for num != 1 {
		left := int64(num) % 2
		num = math.Floor(num / 2)
		str = append(str, strconv.Itoa(int(left)))
	}
	str = append(str, "1")
	return strReverse(strings.Join(str, ""))
}

func strReverse(s string) string {
	rns := []rune(s)
	for i, j := 0, len(rns)-1; i < j; i, j = i+1, j-1 {
		rns[i], rns[j] = rns[j], rns[i]
	}
	return string(rns)
}

func Run09() {
	r1 := solution09(10)
	fmt.Println(r1)

	r2 := solution09(27)
	fmt.Println(r2)

	r3 := solution09(12345)
	fmt.Println(r3)
}
