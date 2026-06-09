


A first draft on the rough architecture of the chessessment web application.
Using https://plantuml.com/component-diagram: 


@startuml
[FrontEnd Angular] -- [API Gateway]
[API Gateway] - [IdentityProvider]:OAuth
[API Gateway] --- Microservices
[API Gateway] -- [Service Registry] 
[Service Registry] -- Microservices 
Microservices .. Data
[Lichess/Chess.com API] - external

component Microservices {
[UserIdentity/Login]
[Lichess/Chess.com API] -- [ChessDataImport] 
[ChessUserAnalysis]
[ChessPuzzleProvider]
[ChessDashboard]
}

component Data {
[UserIdentity/Login] -- [DB_Users] 
[ChessUserAnalysis] -- [DB_ChessGames] 
[ChessPuzzleProvider] --[DB_ChessPuzzles]
}

@enduml











