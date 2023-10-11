export class Pelicula {
    constructor(_id: string, name: string, year: number,type: string) {
        this._id = _id
        this.name = name
        this.year = year
        this.type = type
    } 
    _id?: string
    name: string
    year: number
    type: string
}