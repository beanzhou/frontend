package main

import (
	"fmt"
	"log"
	"net/http"
)

func A(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "a\n")
}

func B(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "b\n")
}

func C(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "c\n")
}

func main() {
	http.HandleFunc("/api/a", A) //	设置访问路由
	http.HandleFunc("/api/b", B) //	设置访问路由
	http.HandleFunc("/api/c", C) //	设置访问路由
	log.Fatal(http.ListenAndServe(":8080", nil))
}
