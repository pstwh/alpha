package main

import "net"
import "fmt"
import "bufio"
import "os"

func main() {

  conn, _ := net.Dial("tcp", "127.0.0.1:8081")
  for { 
    reader := bufio.NewReader(os.Stdin)
	fmt.Print("recv: ")
	
    recv, _ := reader.ReadString('\n')
	fmt.Fprintf(conn, recv + "\n")
	
    send, _ := bufio.NewReader(conn).ReadString('\n')
    fmt.Print("send: " + send)
  }
}