package main

import (
	"bufio"
	"fmt"
	"net"
	"strings"
)

func main() {
	fmt.Println("Listening...")

	ln, _ := net.Listen("tcp", ":8081")
	defer ln.Close()

	for {
		conn, _ := ln.Accept()
		go handleRequest(conn)
	}
}

func handleRequest(conn net.Conn) {
	recv, _ := bufio.NewReader(conn).ReadString('\n')
	fmt.Print("Recv:", string(recv))

    send := strings.ToUpper(recv)
	conn.Write([]byte(send + "\n"))
}