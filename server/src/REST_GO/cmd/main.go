package main

import (
	"fmt"
	"net/http"

	"exe.com/handlers"
	"github.com/gorilla/mux"
)

func main() {
	fmt.Printf("heya world")
	router := mux.NewRouter()
	router.HandleFunc("/getUsers", handlers.GetUsers)
	fmt.Printf("SERVER STARTED")
	http.ListenAndServe(":4000", router)
}
