//package main
//
//import (
//	"fmt"
//	"slices"
//)
//
//func solution(numbers []int) []int {
//	unq := map[int]int{}
//	for i := 0; i < len(numbers); i++ {
//		for j := i; j < len(numbers); j++ {
//			if i == j {
//				continue
//			}
//
//			sum := numbers[i] + numbers[j]
//			unq[sum] = sum
//		}
//	}
//
//	arr := make([]int, 0, len(numbers))
//	for _, v := range unq {
//		arr = append(arr, v)
//	}
//	slices.SortFunc(arr, func(a, b int) int { return b - a })
//
//	return arr
//}
//
//func main() {
//	r1 := solution([]int{2, 1, 3, 4, 1})
//	fmt.Println(r1)
//
//	r2 := solution([]int{5, 0, 2, 7})
//	fmt.Println(r2)
//}
