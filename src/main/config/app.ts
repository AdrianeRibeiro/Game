import { setupRoutes } from "./routes"
import { setupApolloServer } from "../../main/config/apollo-server"

import express from 'express'

const app = express()
setupApolloServer(app)
setupRoutes(app)

export default app