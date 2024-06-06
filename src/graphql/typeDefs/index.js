const { gql } = require('apollo-server');

const typeDefs = gql`
  type Cancion {
    id: Int
    nombre: String
    idAutor: Int
    idGenero: Int
    duracion: Int
  }

  type Autor {
    id: Int
    nombre: String
    idCancion: Int
    idAlbum: Int
  }

  type Album {
    id: Int
    nombre: String
    idAutor: Int
    idGenero: Int
  }

  type Playlist {
    id: Int
    nombre: String
    idUsuario: Int
  }

  type Genero {
    id: Int
    genero: String
  }

  type Terapeuta {
    id: Int
    nombre: String
    apellido: String
    correo: String
    telefono: Int
    contrasena: String
    idUsuario: Int
  }

  type Usuario {
    id: Int
    nombre: String
    telefono: Int
    correo: String
    username: String
    contrasena: String
    idPlaylist: Int
    idTerapeuta: Int
  }

  type Query {
    canciones: [Cancion]
    autores: [Autor]
    albumes: [Album]
    playlists: [Playlist]
    generos: [Genero]
    terapeutas: [Terapeuta]
    usuarios: [Usuario]
  }

  type Mutation {
    # Usuarios
    addUsuario(nombre: String, telefono: Int, correo: String, username: String, contrasena: String, idPlaylist: Int, idTerapeuta: Int): Usuario
    updateUsuario(id: Int, nombre: String, telefono: Int, correo: String, username: String, contrasena: String, idPlaylist: Int, idTerapeuta: Int): Usuario
    deleteUsuario(id: Int): Int

    # Terapeutas
    addTerapeuta(nombre: String, apellido: String, correo: String, telefono: Int, contrasena: String, idUsuario: Int): Terapeuta
    updateTerapeuta(id: Int, nombre: String, apellido: String, correo: String, telefono: Int, contrasena: String, idUsuario: Int): Terapeuta
    deleteTerapeuta(id: Int): Int

    # Canciones
    addCancion(nombre: String, idAutor: Int, idGenero: Int, duracion: Int): Cancion
    updateCancion(id: Int, nombre: String, idAutor: Int, idGenero: Int, duracion: Int): Cancion
    deleteCancion(id: Int): Int

    # Autores
    addAutor(nombre: String, idCancion: Int, idAlbum: Int): Autor
    updateAutor(id: Int, nombre: String, idCancion: Int, idAlbum: Int): Autor
    deleteAutor(id: Int): Int

    # Álbumes
    addAlbum(nombre: String, idAutor: Int, idGenero: Int): Album
    updateAlbum(id: Int, nombre: String, idAutor: Int, idGenero: Int): Album
    deleteAlbum(id: Int): Int

    # Playlists
    addPlaylist(nombre: String, idUsuario: Int): Playlist
    updatePlaylist(id: Int, nombre: String, idUsuario: Int): Playlist
    deletePlaylist(id: Int): Int

    # Géneros
    addGenero(genero: String): Genero
    updateGenero(id: Int, genero: String): Genero
    deleteGenero(id: Int): Int
  }
`;

module.exports = typeDefs;
