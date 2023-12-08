package day5

import (
	"log"
	"strconv"
	"strings"
)

func readInput(in string) ([]int, []Layer) {
	var seeds []int
	var maps []Layer

	var currMap Layer
	for i, line := range strings.Split(in, "\n") {
		if i == 0 {
			seeds = readSeeds(line)
			continue
		}

		if len(line) == 0 {
			if len(currMap) > 0 {
				maps = append(maps, currMap)
			}
			currMap = Layer{}
			continue
		}

		// foo-to-bar map:
		if string(line[len(line)-1]) == ":" {
			continue
		}

		currMap = append(currMap, readMap(line))
	}
	return seeds, maps
}

func readSeeds(line string) []int {
	seedsLine := strings.Split(line, ":")
	if len(seedsLine) != 2 {
		log.Fatalln("invalid seeds line:", line)
	}

	seedsIn := strings.Trim(seedsLine[1], " ")
	return toIntSlice(seedsIn)
}

func readMap(line string) MapTuple {
	parts := toIntSlice(line)
	if len(parts) != 3 {
		log.Fatalln("invalid tuple line:", line)
	}

	return MapTuple{
		destination: parts[0],
		origin:      parts[1],
		length:      parts[2],
	}
}

func toIntSlice(line string) []int {
	var result []int
	for _, seedStr := range strings.Split(line, " ") {
		seed, err := strconv.Atoi(seedStr)
		if err != nil {
			log.Fatalln("invalid tuple line: ", line)
		}
		result = append(result, seed)
	}
	return result
}
