package models

import (
	"fmt"
)

type User struct {
	ID           int    `json:"id"`
	UserEmail    string `json:"user_email"`
	UserPassword string `json:"password"`
	UserName     string `json:"userName"`
	FirstName    string `json:"firstName"`
	LastName     string `json:"lastName"`
	Created      string `json:"created"`
}

type Node struct {
	Val int
	Left *Node
	Right *Node
}

type Stack struct {
	Storage []int
	Count   int
}

func (s *Stack) Push(i int) bool {
	s.Count++
	s.Storage = append(s.Storage, i)
	return true
}
func (s *Stack) Pop() int {
	last := s.Storage[len(s.Storage) -1]
	s.Storage = s.Storage[0:len(s.Storage)-1]
	return last
}

type Group struct {
	User       User
	Group_Id   int
	Group_Name string
}

func Do() {
	group := Group{Group_Id: 10, Group_Name: "jorde", User: User{ID: 10, UserEmail: "idk@yahhoo.com", UserPassword: "pass", UserName: "yorb", FirstName: "f", LastName: "l", Created: "now"}}
	fmt.Print(group.User.ID)
}
