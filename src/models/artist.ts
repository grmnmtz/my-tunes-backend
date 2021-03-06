import { Schema, model } from 'mongoose'
import { Album } from './album'
import { Song } from './song'

export interface Artist {
  _id: string
  name: string
  country: string
  image: string
  // albums?: Album[]
  // songs?: Song[]
  // topSongs?: Song[]
}

export const ArtistSchema = new Schema<Artist>(
  {
    name: { type: String, required: true },
    country: { type: String },
    image: { type: String },
    // albums: [{ type: Schema.Types.ObjectId, required: true, ref: 'album' }],
    // songs: [{ type: Schema.Types.ObjectId, required: true, ref: 'song' }],
    // topSongs: [{ type: Schema.Types.ObjectId, required: true, ref: 'song' }],
  },
  { timestamps: true }
)

export const ArtistModel = model<Artist>('artist', ArtistSchema)

// export interface getArtistByIdDTO {
//   artistId: string
// }
// export interface CreateArtistDTO {
//   name: string
//   nationality: string
// }
// export interface UpdateArtistDTO {
//   artistId: string
//   name: string
//   nationality: string
// }
// export interface deleteArtistDTO {
//   artistId: string
// }
