import { Request, Response } from 'express'
import {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbum,
  getAllAlbumsByGenreId,
  getAllAlbumsByArtistId,
} from '../usecases/album'

export const handleGetAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await getAllAlbums()
    res.send({ response: albums })
  } catch (e) {
    console.error()
  }
}

export const handleGetAlbumsByGenre = async (req: Request, res: Response) => {
  try {
    const { genreId } = req.params

    const albums = await getAllAlbumsByGenreId(genreId)
    res.send({ response: albums })
  } catch (e) {
    console.error()
  }
}

export const handleGetAlbumsByArtist = async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params

    const albums = await getAllAlbumsByArtistId(artistId)
    res.send({ response: albums })
  } catch (e) {
    console.error()
  }
}

export const handleGetAlbum = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const album = await getAlbumById(albumId)
    res.send({ response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumCreate = async (req: Request, res: Response) => {
  try {
    const body = req.body
    const album = await createAlbum(body)
    res.send({ status: 200, response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumUpdate = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const body = req.body
    const album = await updateAlbum(albumId, body)
    res.send({ status: 200, response: album })
  } catch (e) {
    console.error(e)
  }
}

export const handleAlbumDelete = async (req: Request, res: Response) => {
  try {
    const { albumId } = req.params
    const album = await deleteAlbum(albumId)
    res.send({ status: 204, response: album })
  } catch (e) {
    console.error(e)
  }
}
