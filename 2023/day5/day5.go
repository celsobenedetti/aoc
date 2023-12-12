package day5

import (
	"math"
	"slices"
	"time"
)

type MapTuple struct {
	destination, origin, length int
}
type Layer []MapTuple

func Run(in string) (p1, p2 int, d time.Duration) {
	start := time.Now()
	p1 = part1(in)
	p2 = part2(in)
	return p1, p2, time.Since(start)
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

	return slices.Min(seeds)
}

func part2(in string) int {
	return -1
}
