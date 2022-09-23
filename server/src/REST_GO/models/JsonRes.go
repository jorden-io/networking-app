package models
type JsonRes struct {
	Type string `json:"type"`
	Data []User `json:"data"`
	Message string `json:"message"`
}