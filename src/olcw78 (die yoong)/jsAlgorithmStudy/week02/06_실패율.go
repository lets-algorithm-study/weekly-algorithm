package main

import (
	"fmt"
	"slices"
	"sort"
)

type Res struct {
	i        int
	failRate float64
}

func solution(N int, stages []int) []int {
	fails := make([]Res, 0, N)

	for i := 1; i <= N; i++ {
		yet := 0
		reached := 0

		del := make([]int, 0)
		for sti, st := range stages {
			reached++
			if st <= i {
				yet++
				del = append(del, sti)
			}
		}

		deletedStages := make([]int, len(stages), len(stages))
		copy(deletedStages, stages)

		sort.Sort(sort.Reverse(sort.IntSlice(del)))
		for _, e := range del {
			deletedStages = append(deletedStages[:e], deletedStages[e+1:]...)
		}

		stages = stages[:0]
		stages = append(stages, deletedStages...)

		failRate := float64(yet) / float64(reached)
		fails = append(fails, Res{i, failRate})
	}

	slices.SortFunc(
		fails,
		func(a, b Res) int {
			v := b.failRate - a.failRate
			v *= 10000
			return int(v)
		})

	res := make([]int, 0, len(fails))
	for _, fail := range fails {
		res = append(res, fail.i)
	}

	return res
}

type Res2 struct {
	stage    int
	failRate float64
}

func solution1(N int, stages []int) []int {
	failRates := make([]Res2, N)
	for stage := 1; stage <= N; stage++ {
		total, fail := 0, 0

		for _, playerStage := range stages {
			if playerStage >= stage {
				total += 1
				if playerStage == stage {
					fail += 1
				}
			}
		}

		failRate := 0.0
		if total > 0 {
			failRate = float64(fail) / float64(total)
		}

		failRates[stage-1] = Res2{stage, failRate}
	}

	sort.Slice(failRates, func(i, j int) bool {
		return failRates[i].failRate > failRates[j].failRate ||
			(failRates[i].failRate == failRates[j].failRate && failRates[i].stage < failRates[j].stage)
	})

	result := make([]int, N)
	for i, r := range failRates {
		result[i] = r.stage
	}

	return result
}

func main() {
	r1 := solution(5, []int{2, 1, 2, 6, 2, 4, 3, 3})
	fmt.Println(r1)

	r2 := solution(4, []int{4, 4, 4, 4, 4})
	fmt.Println(r2)

	r3 := solution(5, []int{2, 1, 2, 6, 2, 4, 3, 3})
	fmt.Println(r3)

	r4 := solution(4, []int{4, 4, 4, 4, 4})
	fmt.Println(r4)
}
