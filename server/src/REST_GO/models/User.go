package models

type User struct {
	ID           int    `json:"id"`
	UserEmail    string `json:"user_email"`
	UserPassword string `json:"password"`
	UserName     string `json:"userName"`
	FirstName    string `json:"firstName"`
	LastName     string `json:"lastName"`
	Created      string `json:"created"`
}
