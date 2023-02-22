package practice

import "fmt"

func Gen[exe float32 | int64](x exe) exe {
	fmt.Printf("%T\n", x)
	return x
}
func Gen2(x int32) int32 {
	return x
}
