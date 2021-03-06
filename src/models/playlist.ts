import { Schema, model } from 'mongoose'
import { User } from './user'
import { Song } from './song'
import { Genre } from './genre'

export interface Playlist {
  _id: string
  title: string
  userId?: User
  songs?: Song[]
  genre: Genre
}

export const playlistSchema = new Schema<Playlist>(
  {
    title: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'user' }, //required: true,
    songs: [{ type: Schema.Types.ObjectId, required: true, ref: 'song' }],
    genre: { type: Schema.Types.ObjectId, required: true, ref: 'genre' },
  },
  { timestamps: true }
)

export const PlaylistModel = model<Playlist>('playlist', playlistSchema)
