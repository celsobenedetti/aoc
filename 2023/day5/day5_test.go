package day5

import (
	"os"
	"testing"

	"github.com/matryer/is"
)

func Test_readInput(t *testing.T) {
	is := is.New(t)

	in := `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15`

	seeds, _ := readInput(in)
	wantSeeds := []int{79, 14, 55, 13}

	is.Equal(seeds, wantSeeds) // seeds got != want
}

func TestDay5(t *testing.T) {
	is := is.New(t)

	input, err := os.ReadFile("./test.input.txt")
	is.NoErr(err) // error reading input

	p1, p2, _ := Run(string(input))

	want1 := 35
	want2 := 46

	is.Equal(p1, want1) // part1
	is.Equal(p2, want2) // part2
}
