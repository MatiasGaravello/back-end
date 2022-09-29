class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(nombre){
        this.mascotas.push(nombre)
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre, autor})
    }

    getBookNames(){
        return this.libros.map((libro)=>{
            return libro.nombre
        })
    }

}

const usuario1 = new Usuario('Matias', 'Garavello', [{nombre: 'El señor de los anillos', autor: 'J. R. R. Tolkien'}], ['Joaquin', 'Cuca'])

console.log(usuario1)

const fullName = usuario1.getFullName()
console.log(`Full name: ${fullName}`)

usuario1.addMascota('Kitty')

console.log('Cantidad de mascotas: ' + usuario1.countMascotas())

usuario1.addBook('Midnight Express', 'Billy Hayes y William Hoffer')

console.log('Libros: ' + usuario1.getBookNames())

console.log(usuario1)



