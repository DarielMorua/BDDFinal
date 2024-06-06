const bcrypt = require('bcrypt');
const db = require('../../database/db');

const saltRounds = 10;

const resolvers = {
  Query: {
    canciones: async () => await db.select().table('Cancion'),
    autores: async () => await db.select().table('Autor'),
    albumes: async () => await db.select().table('Album'),
    playlists: async () => await db.select().table('Playlist'),
    generos: async () => await db.select().table('Genero'),
    terapeutas: async () => await db.select().table('Terapeuta'),
    usuarios: async () => await db.select().table('Usuario'),
  },

  Mutation: {
    // Usuarios
    addUsuario: async (_, { nombre, telefono, correo, username, contrasena, idPlaylist, idTerapeuta }) => {
      const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
      const [id] = await db('Usuario').insert({ nombre, telefono, correo, username, contrasena: hashedPassword, idPlaylist, idTerapeuta });
      return await db('Usuario').where({ id }).first();
    },
    updateUsuario: async (_, { id, nombre, telefono, correo, username, contrasena, idPlaylist, idTerapeuta }) => {
      const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
      await db('Usuario').where({ id }).update({ nombre, telefono, correo, username, contrasena: hashedPassword, idPlaylist, idTerapeuta });
      return await db('Usuario').where({ id }).first();
    },
    deleteUsuario: async (_, { id }) => {
      await db('Usuario').where({ id }).del();
      return id;
    },

    // Terapeutas
    addTerapeuta: async (_, { nombre, apellido, correo, telefono, contrasena, idUsuario }) => {
      const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
      const [id] = await db('Terapeuta').insert({ nombre, apellido, correo, telefono, contrasena: hashedPassword, idUsuario });
      return await db('Terapeuta').where({ id }).first();
    },
    updateTerapeuta: async (_, { id, nombre, apellido, correo, telefono, contrasena, idUsuario }) => {
      const hashedPassword = await bcrypt.hash(contrasena, saltRounds);
      await db('Terapeuta').where({ id }).update({ nombre, apellido, correo, telefono, contrasena: hashedPassword, idUsuario });
      return await db('Terapeuta').where({ id }).first();
    },
    deleteTerapeuta: async (_, { id }) => {
      await db('Terapeuta').where({ id }).del();
      return id;
    },

    // Canciones
    addCancion: async (_, { nombre, idAutor, idGenero, duracion }) => {
      const [id] = await db('Cancion').insert({ nombre, idAutor, idGenero, duracion });
      return await db('Cancion').where({ id }).first();
    },
    updateCancion: async (_, { id, nombre, idAutor, idGenero, duracion }) => {
      await db('Cancion').where({ id }).update({ nombre, idAutor, idGenero, duracion });
      return await db('Cancion').where({ id }).first();
    },
    deleteCancion: async (_, { id }) => {
      await db('Cancion').where({ id }).del();
      return id;
    },

    // Autores
    addAutor: async (_, { nombre, idCancion, idAlbum }) => {
      const [id] = await db('Autor').insert({ nombre, idCancion, idAlbum });
      return await db('Autor').where({ id }).first();
    },
    updateAutor: async (_, { id, nombre, idCancion, idAlbum }) => {
      await db('Autor').where({ id }).update({ nombre, idCancion, idAlbum });
      return await db('Autor').where({ id }).first();
    },
    deleteAutor: async (_, { id }) => {
      await db('Autor').where({ id }).del();
      return id;
    },

    // Álbumes
    addAlbum: async (_, { nombre, idAutor, idGenero }) => {
      const [id] = await db('Album').insert({ nombre, idAutor, idGenero });
      return await db('Album').where({ id }).first();
    },
    updateAlbum: async (_, { id, nombre, idAutor, idGenero }) => {
      await db('Album').where({ id }).update({ nombre, idAutor, idGenero });
      return await db('Album').where({ id }).first();
    },
    deleteAlbum: async (_, { id }) => {
      await db('Album').where({ id }).del();
      return id;
    },

    // Playlists
    addPlaylist: async (_, { nombre, idUsuario }) => {
      const [id] = await db('Playlist').insert({ nombre, idUsuario });
      return await db('Playlist').where({ id }).first();
    },
    updatePlaylist: async (_, { id, nombre, idUsuario }) => {
      await db('Playlist').where({ id }).update({ nombre, idUsuario });
      return await db('Playlist').where({ id }).first();
    },
    deletePlaylist: async (_, { id }) => {
      await db('Playlist').where({ id }).del();
      return id;
    },

    // Géneros
    addGenero: async (_, { genero }) => {
      const [id] = await db('Genero').insert({ genero });
      return await db('Genero').where({ id }).first();
    },
    updateGenero: async (_, { id, genero }) => {
      await db('Genero').where({ id }).update({ genero });
      return await db('Genero').where({ id }).first();
    },
    deleteGenero: async (_, { id }) => {
      await db('Genero').where({ id }).del();
      return id;
    },
  },
};

module.exports = resolvers;
