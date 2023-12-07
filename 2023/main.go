package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/celsobenedetti/aoc/2023/day5"
)

type (
	SolutionFn = func(string) (p1, p2 int)
	Solution   struct {
		Part1 int `json:"p1"`
		Part2 int `json:"p2"`
	}
)

var (
	inputFile     = "input.txt"
	testInputFile = "test.input.txt"
	solutions     = map[int]SolutionFn{
		5: day5.Run,
	}
	dev = flag.Bool("dev", false, "run solutions with test input")
)

func main() {
	flag.Parse()
	if *dev {
		inputFile = testInputFile
	}

	solutions := run()

	results, err := json.Marshal(solutions)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(string(results))
}

func run() map[int]Solution {
	results := make(map[int]Solution)

	for day, solution := range solutions {
		input, err := ReadFileToStr(
			fmt.Sprintf("./day%d/%s", day, inputFile),
		)
		if err != nil {
			fmt.Printf("Day %d: %v, moving on...\n", day, err)
			continue
		}

		p1, p2 := solution(input)

		results[day] = Solution{
			Part1: p1,
			Part2: p2,
		}
	}
	return results
}

func ReadFileToStr(file string) (string, error) {
	data, err := os.ReadFile(file)
	if err != nil {
		return "", err
	}
	return string(data), nil
}
