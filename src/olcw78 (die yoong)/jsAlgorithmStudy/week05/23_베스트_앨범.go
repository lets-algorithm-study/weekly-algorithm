package week05

import (
	"fmt"
	"sort"
)

// 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록.
//
//

type record struct {
	count int
	unq   []unq
}

type unq struct {
	index int
	plays int
}

func solution23(genres []string, plays []int) []int {
	rank := map[string]record{}
	for i := 0; i < len(genres); i++ {
		if _, ok := rank[genres[i]]; !ok {
			rank[genres[i]] = record{
				count: plays[i],
				unq:   []unq{{i, plays[i]}},
			}
		} else {
			r := rank[genres[i]]
			rank[genres[i]] = record{
				count: r.count + plays[i],
				unq:   append(r.unq, unq{i, plays[i]}),
			}
		}
	}

	buf := []record{}
	for _, r := range rank {
		buf = append(buf, r)
		sort.Slice(
			r.unq,
			func(i, j int) bool { return r.unq[i].plays > r.unq[j].plays },
		)
	}
	sort.Slice(
		buf,
		func(i, j int) bool { return buf[i].count > buf[j].count },
	)

	var ret []int
	for _, b := range buf {
		var slice []unq
		if len(b.unq) == 1 {
			slice = b.unq[:1]
			b.unq = b.unq[1:]
		} else {
			slice = b.unq[:2]
			b.unq = b.unq[2:]
		}
		for _, s := range slice {
			ret = append(ret, s.index)
		}
	}
	return ret
}

func Run23() {
	r1 := solution23(
		[]string{"classic", "pop", "classic", "classic", "pop"},
		[]int{500, 600, 150, 800, 2500},
	)
	fmt.Println(r1)
	// [4, 1, 3, 0]

	r2 := solution23(
		[]string{"classic", "classic", "classic"},
		[]int{1, 2, 1},
	)
	fmt.Println(r2)
	// [1, 0]
}
