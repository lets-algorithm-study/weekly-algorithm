package week09

import "fmt"

func solution(graph [][]string, start string) []string {
	visited := make(map[string]bool)
	var res []string

	// 인접 리스트 만들기
	adjList := make(map[string][]string)
	for _, strings := range graph {
		from, to := strings[0], strings[1]
		adjList[from] = append(adjList[from], to)
	}

	dfs(start, visited, &res, adjList)
	return res
}

// map 은 참조타입으로 포인터로 넘길필요 없음
// res (slice) 는 내부 수정 시에 포인터로 넘기는게 필요
func dfs(
	node string,
	visited map[string]bool,
	res *[]string,
	adjList map[string][]string,
) {
	visited[node] = true

	*res = append(*res, node)
	if _, ok := adjList[node]; !ok {
		return
	}

	for _, adj := range adjList[node] {
		if !visited[adj] {
			dfs(adj, visited, res, adjList)
		}
	}
}

func Run38() {
	r1 := solution([][]string{
		{"A", "B"},
		{"B", "C"},
		{"C", "D"},
		{"D", "E"},
	}, "A")
	fmt.Println(r1) // ["A", "B", "C", "D", "E"]

	r2 := solution([][]string{
		{"A", "B"},
		{"A", "C"},
		{"B", "D"},
		{"B", "E"},
		{"C", "F"},
		{"E", "F"},
	}, "A")
	fmt.Println(r2) // ["A", "B", "D", "E", "F", "C"]
}
