import { ProductModel } from '../models/product'

export const getAllProducts = async () => {
  return await ProductModel.find().populate({
    path: 'album',
  })
}

export const getAllProductsByGenreId = async (id: any) => {
  return await ProductModel.find({ genre: id }).populate({
    path: 'album',
  })
}

export const getAllProductsByFormat = async (format: any) => {
  return await ProductModel.find({ format: format }).populate({
    path: 'album',
  })
}

export const getAllProductsByArtistId = async (id: any) => {
  return await ProductModel.find({ artist: id }).populate({
    path: 'album',
  })
}

export const getProductById = async (id: any) => {
  return await ProductModel.findById(id).populate({
    path: 'album',
  })
}

export const createProduct = async (body: any) => {
  return await ProductModel.create(body)
}

export const updateProduct = async (id: any, body: any) => {
  return await ProductModel.findByIdAndUpdate(id, body, { new: true })
}

export const deleteProduct = async (id: any) => {
  return await ProductModel.findByIdAndDelete(id)
}
