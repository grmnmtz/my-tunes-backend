import { Schema, model } from 'mongoose'
import { User } from './user'
import { Song } from './song'
import { Genre } from './genre'

export interface Playlist {
  _id: string
  title: string
  userId?: User
  songs?: Song[]
  genres: Genre[]
}

const playlistSchema = new Schema<Playlist>(
  {
    title: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'user' }, //required: true,
    songs: [{ type: Schema.Types.ObjectId, required: true, ref: 'song' }],
    genres: [{ type: Schema.Types.ObjectId, required: true, ref: 'genre' }],
  },
  { timestamps: true }
)

export const PlaylistModel = model<Playlist>('playlist', playlistSchema)
