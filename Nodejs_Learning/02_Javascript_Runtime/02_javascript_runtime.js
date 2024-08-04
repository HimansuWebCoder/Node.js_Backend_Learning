// JS file
// V8 Engine <--------> libuv

// Is web browser a Javascript Runtime?
// See in stackoverflow google search

//                          THE NODE.JS SYSTEM

// --------           | |   NODE.JS  |  |               LIBUV 
// APPLICATION        | |  BINDINGS  |  |        (ASYNCHRONOUS I/O)
// --------           | | (NODE API) |  | EVENT               BLOCKING         WORKER
// ^                  | |            |  | QUEUE ---> -------  OPERATION        THREADS
// |       |          | |            |  | -----      EVENT    ---------------> FILE SYSTEM
// |       |          | |    OS      |  | -----      LOOP                      -----------
// V8                 | | OPERATION  |  | -----      -------  EXECUTE CALLBACK  NETWORK
// (JAVASCRIPT ENGINE)| |            |  | ----- <---         <---------------- -----------
//                                                                             PROCESS
//                                                                             ----------

//                                                                             ----------

// In browser WINDOW 
// In node global

// You can use repl site to run node.js directly without installing node.js

// 1995-----1996---------------2008---2009--------2019(Deno) (Ryan Dhai)                                                                            