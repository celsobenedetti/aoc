package day5

import (
	"math"
)

type (
	Layer    []MapTuple
	MapTuple struct {
		destination, origin, length int
	}
)

func Run(in string) (p1, p2 int) {
	return part1(in), part2(in)
}

func part1(in string) int {
	seeds, layers := readInput(in)

	for _, layer := range layers {
		mapped := make([]bool, len(seeds))

		for _, tuple := range layer {
			for i := 0; i < len(seeds); i++ {
				if mapped[i] {
					continue
				}

				curr := seeds[i]
				if tuple.origin <= curr && tuple.origin+tuple.length >= curr {
					mapped[i] = true
					diff := int(math.Abs(float64(tuple.origin) - float64(curr)))
					seeds[i] = tuple.destination + diff
				}
			}
		}
	}

	min := math.MaxInt32
	for _, seed := range seeds {
		if min > seed {
			min = seed
		}
	}
	return min
}

func part2(in string) int {
	return -1
}
