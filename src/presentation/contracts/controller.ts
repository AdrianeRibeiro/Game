import { HttpResponse } from '../contracts/http'

export interface Controller {
    handle: () => Promise<HttpResponse>
}