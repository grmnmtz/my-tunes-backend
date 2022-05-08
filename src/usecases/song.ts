import { SongModel } from '../models/song'
import { Types } from 'mongoose'

export const getAllSongs = async () => {
  return await SongModel.find().populate({
    path: 'artist album genre',
  })
}

export const getAllSongsByGenreId = async (id: any) => {
  return await SongModel.find({ genre: id }).populate({
    path: 'artist album genre',
  })
}

export const getAllSongsByAlbumId = async (id: any) => {
  return await SongModel.find({ album: id }).populate({
    path: 'artist album genre',
  })
}

export const getAllSongsByArtistId = async (id: any) => {
  return await SongModel.find({ artist: new Types.ObjectId(id) }).populate({
    path: 'artist album genre',
  })
}

export const getSongById = async (id: any) => {
  return await SongModel.findById(id).populate({
    path: 'artist album genre',
  })
}

export const createSong = async (body: any) => {
  return await SongModel.create(body)
}

export const updateSong = async (id: any, body: any) => {
  return await SongModel.findByIdAndUpdate(id, body, { new: true }).populate({
    path: 'artist album genre',
  })
}

export const deleteSong = async (id: any) => {
  return await SongModel.findByIdAndDelete(id)
}
