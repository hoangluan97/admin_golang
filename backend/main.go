package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func initRouter() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/static", chart.GetChartData).Methods("GET")

	return router
}

func main() {
	router := initRouter()

	router.Use(mux.CORSMethodMiddleware(router))

	fmt.Println("connected")
	err := http.ListenAndServe(":8080", router)

	if err != nil {
		fmt.Println("Error starting server:", err)
		panic(err)
	}
}
