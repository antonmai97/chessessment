# chessessment
Placeholder for a chess web project, which lets you assess and improve your chess skills. For me to revise/learn everything about Microservices, Angular/React etc.

Tasks:
- Assessment of current skills (with example positions to solve in different areas, lichess.org rating/puzzle rating, game analysis)
- Improve chess skills (let user know where they lose most/where to improve most, give them tools/puzzles/similar)
- Graphical Interface (clean and clear graphical interface for user to know exactly how good their skills are. Also should look nice and motivate to do more chess)


Frameworks/Tools I want to use:

- Spring Boot/Security
- Angular
- Maven
- PostgreSQL

- Microservice
- REST API
- CI/CD



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






