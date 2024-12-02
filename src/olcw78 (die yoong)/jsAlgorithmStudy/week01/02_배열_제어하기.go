//package main
//
//import (
//	"fmt"
//	"slices"
//)
//
//func solution(arr []int) []int {
//	unq := make(map[int]int)
//	for _, e := range arr {
//		unq[e] = e
//	}
//
//	answer := make([]int, 0, len(unq))
//	for _, v := range unq {
//		answer = append(answer, v)
//	}
//
//	slices.SortFunc(answer,
//		func(a, b int) int {
//			return b - a
//		},
//	)
//
//	return answer
//}
//
//func main() {
//	r1 := solution([]int{4, 2, 2, 1, 3, 4})
//	fmt.Println(r1)
//
//	r2 := solution([]int{2, 1, 1, 3, 2, 5, 4})
//	fmt.Println(r2)
//}
