package handlers

import (
	"encoding/json"
	"net/http"

	"exe.com/helpers"
	"exe.com/models"
)

const (
	DB_USER     = "jorby"
	DB_PASSWORD = "Minecraft256$"
	DB_NAME     = "test"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
	db := helpers.SetUpDb()
	rows, err := db.Query("SELECT * FROM users;")
	helpers.CheckErr(err)
	var users []models.User
	for rows.Next() {
		var id int
		var userEmail string
		var userPassword string
		var userName string
		var firstName string
		var lastName string
		var created string
		err = rows.Scan(&id, &userEmail, &userPassword, &userName, &firstName, &lastName, &created)
		users = append(users, models.User{ID: id, UserEmail: userEmail, UserPassword: userPassword, UserName: userName, FirstName: firstName, LastName: lastName, Created: created})
	}
	var res = models.JsonRes{Type: "succes", Data: users}
	json.NewEncoder(w).Encode(res)
}
