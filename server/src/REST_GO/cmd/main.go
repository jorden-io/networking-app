package main

import (
	"fmt"
	"net/http"
	"sync"

	"exe.com/handlers"
	"exe.com/models"
	"exe.com/practice"
	"github.com/gorilla/mux"
)

var i int = 10

type Idk struct {
	x float64
}
type dick struct {
	y int32
}

func (dick) made() int32 {
	idl := dick{y: 10}
	return idl.y
}

func (d dick) idky() int32 {
	idl := dick{y: 10}
	return idl.y
}
func (i Idk) do() {
	if i.x < 10 {
		fmt.Print("less than 10")
	}
}

type fuck struct {
	x     int64
	store []int
}

func (f *fuck) destroy() int {
	var rem = f.store[len(f.store)-1]
	f.store = f.store[:len(f.store)-1]
	return rem
}
func (f *fuck) push(i int) {
	f.store = append(f.store, i)
}
func (f *fuck) exchange(old int, new int) bool {
	f.store[old] = new
	return true
}
func init() {
}

func depthFirst(n models.Node) int {
	fmt.Print(n.Val)
	if n.Right != nil {
		return depthFirst(*n.Right)
	}
	if n.Left != nil {
		return depthFirst(*n.Left)
	}
	return 0
}
func pointer(i *int) *int {
	fmt.Printf("%v\n", i)
	return i
}

func main() {
	stack := models.Stack{Storage: []int{}, Count: 0}
	stack.Push(10)
	var arr = [100000]int64{}
	for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
	channel := make(chan string)
	close(channel)
	var tesA = [5]int{1, 2, 3, 4, 5}
	var sliced []int = tesA[1:5]
	fmt.Print(sliced[1])
	val := 10
	bal := &val
	pointer(&val)
	*bal = 4
	fmt.Print(*bal, "\n")
	fmt.Print(val)
	fmt.Scanln()
	q := models.Node{Val: 7, Left: nil, Right: nil}
	g := models.Node{Val: 6, Left: nil, Right: nil}
	d := models.Node{Val: 5, Left: nil, Right: nil}
	e := models.Node{Val: 4, Left: nil, Right: nil}
	b := models.Node{Val: 2, Left: &e, Right: &d}
	c := models.Node{Val: 3, Left: &g, Right: &q}
	a := models.Node{Val: 1, Left: &b, Right: &c}
	depthFirst(a)
	buck := fuck{x: 10, store: []int{}}
	buck.push(10)
	buck.exchange(0, 64)
	fmt.Print(buck.store[0])
	buck.push(10)
	buck.push(10)
	buck.push(10)
	buck.push(76)
	fmt.Print(buck.store)
	fmt.Print(buck.store[1 : len(buck.store)-1])
	buck.destroy()
	//fmt.Print(len(buck.store))
	fmt.Print("\n")
	var f string
	// d := dick{y: 64}
	// d.made()
	fmt.Scanln(&f)
	fmt.Printf("%v\n", f)
	t := make(chan int64)
	close(t)
	rip := Idk{x: 111.1}
	//idky()
	rip.do()
	fmt.Print(practice.Gen[int64](64), "\n")
	fmt.Print(practice.Gen2(193218), " test \n")
	fmt.Printf("%v \n", &i)
	wg := sync.WaitGroup{}
	ar := []int{1, 2, 3}
	bar := append(ar, 10, 2)
	fmt.Printf("%v\n", bar)
	//fmt.Print(len(bar), " is the length of bar")
	tes := 10
	hey := &tes

	fmt.Println(tes, "old")
	wg.Add(1)
	go func(x *int) int {
		fmt.Printf("%v \n", *x)
		*x = 967
		fmt.Println(tes, "new")
		wg.Done()
		return *x
	}(hey)
	wg.Add(1)
	go func() {
		wg.Done()
		fmt.Println("line")
	}()
	//c := &i
	//fmt.Printf("%v \n", i)
	// c := &i
	// *c = 1
	//fmt.Printf("%v \n", i)

	router := mux.NewRouter()
	go router.HandleFunc("/getUsers/{id}", handlers.GetUsers)
	fmt.Println("SERVER STARTED")
	http.ListenAndServe(":8000", router)
	wg.Wait()
}
