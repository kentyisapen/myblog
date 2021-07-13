require 'image_processing/mini_magick'

class ImageUploader < Shrine
  include ImageProcessing::MiniMagick
  plugin :processing
 
  process(:store) do |io, context|
    io.download do |original|
    ImageProcessing::MiniMagick
      .source(original)
      .resize_to_limit!(200,200)
    end
  end
end