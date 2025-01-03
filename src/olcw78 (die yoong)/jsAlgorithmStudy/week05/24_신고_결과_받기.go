package week05

import (
	"fmt"
	"strings"
)

type reportRecord struct {
	reportedBy    map[string]string
	reportedCount int
}

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// - 신고 횟수에 제한은 없다. 서로 다른 유저를 계속 신고 가능
// - 한 유저를 여러번 신고할 수 있지만 동일한 유저에 대한 신고 횟수는 1회로 처리됨.
// k번 이상 신고된 유저는 정지되며 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송
// - 유저가 신고한 모든 내용을 취합해 마지막에 한꺼번에 계시판 이용 정지를 시키면서 정지 메일을 발송
func solution24(id_list []string, report []string, k int) []int {
	idHt := map[string]int{}
	for i, id := range id_list {
		idHt[id] = i
	}
	history := map[string]reportRecord{}
	ret := make([]int, len(id_list))
	for _, r := range report {
		rsplit := strings.Split(r, " ")
		reporter, reported := rsplit[0], rsplit[1]

		if h, ok := history[reported]; !ok {
			history[reported] = reportRecord{
				reportedBy:    map[string]string{reporter: reporter},
				reportedCount: 1,
			}
		} else {
			newRecord := reportRecord{
				reportedBy:    map[string]string{reporter: reporter},
				reportedCount: h.reportedCount,
			}

			nextCnt := 0
			if _, ok2 := h.reportedBy[reporter]; !ok2 {
				nextCnt = h.reportedCount + 1
			} else {
			}

			for _, p := range h.reportedBy {
				newRecord.reportedBy[p] = p
			}
			newRecord.reportedCount = nextCnt
			history[reported] = newRecord
		}
	}

	for _, h := range history {
		for _, reporter := range h.reportedBy {
			if h.reportedCount >= k {
				ret[idHt[reporter]]++
			}
		}
	}

	return ret
}

func solution24_2(id_list []string, report []string, k int) []int {
	idMap := make(map[string]bool)
	for _, id := range id_list {
		idMap[id] = false
	}
	// 중복 신고 제거를 위한 맵
	reportSet := make(map[string]bool)
	// 신고 횟수를 카운트하는 맵
	reportCount := make(map[string]int)
	// 신고자별 신고한 사용자 맵
	userReport := make(map[string][]string)

	// 중복 제거 및 신고 처리
	for _, r := range report {
		if reportSet[r] {
			continue
		}
		reportSet[r] = true

		spl := strings.Split(r, " ")
		reporter, reported := spl[0], spl[1]
		reportCount[reported]++
		userReport[reporter] = append(userReport[reporter], reported)
	}

	// 결과 계산
	result := make([]int, len(id_list))
	for i, id := range id_list {
		for _, reported := range userReport[id] {
			if reportCount[reported] >= k {
				result[i]++
			}
		}
	}

	return result
}

func Run24() {
	r1 := solution24(
		[]string{"muzi", "frodo", "apeach", "neo"},
		[]string{
			"muzi frodo",
			"apeach frodo",
			"frodo neo",
			"muzi neo",
			"apeach muzi",
		},
		2,
	)
	fmt.Println(r1)
	// [2, 1, 1, 0]

	r2 := solution24(
		[]string{"con", "ryan"},
		[]string{"ryan con", "ryan con", "ryan con", "ryan con"},
		3,
	)
	fmt.Println(r2)
	// [0, 0]
}
